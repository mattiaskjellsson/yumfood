import {MigrationInterface, QueryRunner, Repository, getRepository} from "typeorm";
import { Vendor } from "./../entities/vendor.entity";
import { Dish } from "./../entities/dish.entity";
import { Tag } from './../entities/tag.entity';

const tagSeeds = [
  'CHINESE',
  'WESTERN',
  'KOREAN',
  'INDONESIAN',
  'BEVERAGES',
  'HALAL',
  'LUNCH',
  'DINNER',
  'BREAKFAST',
  'FISH',
  'MEAT',
  'BUDGET',
  'AFFORDABLE',
  'EXPENSIVE',
];

const vendorSeeds = [
  {
    name: "Pizza place",
    tags: ["WESTERN"],
    dishes: [
      {
        name: "Spagetti carbonara",
        price: 7
      },
      {
        name: "Pizza margarita",
        price: 8
      },
    ]
  },
  {
    name: "Kebab joint",
    tags: ["AFFORDABLE", "HALAL", "MEAT"],
    dishes: [{
      name: "Kebab kofta",
      price: 10,
    }]
  },
  {
    name: "Warung padang",
    tags: ["INDONESIAN", "EXPENSIVE"],
    dishes: [
      {
        name: "Nassi goreng",
        price: 19
      },
      {
        name: "Tuna sallad",
        price: 4
      }
    ]
  }
];

export class vendors1593872120387 implements MigrationInterface {
    private repo: Repository<Vendor> = getRepository(Vendor);
    private dishRepo: Repository<Dish> = getRepository(Dish);
    private tagRepo: Repository<Tag> = getRepository(Tag);
    
    public async up(queryRunner: QueryRunner): Promise<void> {
      const tagPromises = tagSeeds.map(async (x) => {
        const t = new Tag();
        t.name = x;
        return await this.tagRepo.save(t);
      });
      
      const tags = await Promise.all(tagPromises);

      vendorSeeds.forEach(async (x) => {
        let venue = new Vendor();
        venue.name = x.name;
        venue.tags = x.tags.map(y => tags.find(z => z.name === y))

        venue = await this.repo.save(venue);

        x.dishes.forEach(async y => {
          const d = new Dish();
          d.name = y.name;
          d.price = y.price;
          d.vendor = venue;
          await this.dishRepo.save(d);
        });
      });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      // noop
    }

}
