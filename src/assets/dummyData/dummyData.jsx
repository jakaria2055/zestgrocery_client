
import Apples from './Apples.png'; // ← Replace with your actual image path
import Bananas from "./Bananas.png"
import Strawberries from "./Strawberries.png"
import Orange from "./Oranges.png"
import Grapes from "./Grapes.png"
import Spinach from "./Spinach.png"
import BellPeppers from "./BellPeppers.png"
import Tomato from "./Tomatoes.png"
import Papaya from "./Papaya.png"
import DragonFruit from './Dragon Fruit.png'
import Kiwi from "./Kiwi.png"
import Potato from "./Potato.png"
import LadyFinger from "./LadyFinger.png"
import Cucumber from "./Cucumber.png"
import Onion from "./Onion.png"
import Garlic from "./Garlic.png"
import Yogurt from "./Yogurt.png"
import Ghee from "./Ghee.png"
import CheddarCheese from "./CheddarCheese.png"
import Butter from "./Butter.png"
import Milk from "./Milk.png"
import Cream from "./SourCream.png"
import Paneer from "./Paneer.png"
import IceCream from "./IceCream.png"
import Water from "./Water.png"
import OrangeJuice from "./OrangeJuice.png"
import Coffee from "./Coffee.png"
import Tea from "./Tea.png"
import EnergyDrink from "./EnergyDrink.png"
import CoconutWater from "./CoconutWater.png"
import Cola from "./Cola.png"
import Lassi from "./Lassi.png"
import Cookies from "./Cookies.png"
import Chips from "./PotatoChips.png"
import Nuts from "./MixedNuts.png"
import Granola from "./GranolaBars.png"
import Popcorn from "./Popcorn.png"
import ChocolateBar from "./Chocolate Bar.png"
import TrailMix from "./TrailMix.png"
import Pretzels from "./Pretzels.png"
import Lobster from "./Lobster.png"
import Crab from "./Crab.png"
import Scallops from "./Scallops.png"
import Mussels from "./Mussels.png"
import Oysters from "./Oysters.png"
import KingCrab from "./KingCrab.png"
import Anchovies from "./Anchovies.png"
import SmokehouseMackerel from "./SmokehouseMackerel.png"
import Sourdough from "./SourdoughLoaf.png"
import Brioche from "./BriocheBun.png"
import Baguette from "./Baguette.png"
import BananaBread from "./BananaBread.png"
import ChocolateDonut from "./ChocolateDonut.png"
import Eclair from "./Eclair.png"
import PoundCake from "./PoundCake.png"
import FocacciaBread from "./Focaccia.png"
import LambChops from "./Lamb Chops.png"
import TurkeyBreast from "./Turkey Breast.png"
import VealCutlet from "./Veal Cutlet.png"
import BeefSteak from "./Beef Steak.png"
import DuckBreast from "./Duck Breast.png"
import Ham from "./Ham.png"
import MeatBalls from "./Meatballs.png"
import PorkRibs from "./Pork Ribs.png"
// Categories data
import {
  GiAppleCore,
  GiBroccoli,
  GiMilkCarton,
  GiWineGlass,
  GiPopcorn,
  GiShrimp,
  GiCroissant,
  GiChickenLeg
} from 'react-icons/gi';

export const categories = [
  {
    name: 'Fruits',
    icon: <GiAppleCore className="text-red-500 text-2xl" />
  },
  {
    name: 'Vegetables',
    icon: <GiBroccoli className="text-green-100 text-2xl" />
  },
  {
    name: 'Dairy',
    icon: <GiMilkCarton className="text-yellow-400 text-2xl" />
  },
  {
    name: 'Beverages',
    icon: <GiWineGlass className="text-blue-500 text-2xl" />
  },
  {
    name: 'Snacks',
    icon: <GiPopcorn className="text-amber-600 text-2xl" />
  },
  {
    name: 'Seafood',
    icon: <GiShrimp className="text-teal-100 text-2xl" />
  },
  {
    name: 'Bakery',
    icon: <GiCroissant className="text-amber-700 text-2xl" />
  },
  {
    name: 'Meat',
    icon: <GiChickenLeg className="text-red-700 text-2xl" />
  }
];


// Products data with more items
export const products = [
  // Fruits
  { id: 1, name: ' Apples', price: 50, category: 'Fruits', image: Apples },
  { id: 2, name: ' Bananas', price: 96, category: 'Fruits', image: Bananas },
  { id: 3, name: 'Sweet Strawberries', price: 45, category: 'Fruits', image: Strawberries },
  { id: 4, name: 'Juicy Oranges', price: 12, category: 'Fruits', image: Orange },
  { id: 5, name: 'Seedless Grapes', price: 37, category: 'Fruits', image: Grapes },
  { id: 6, name: 'Dragon Fruit', price: 55, category: 'Fruits', image: DragonFruit },
  { id: 7, name: 'Kiwi', price: 85, category: 'Fruits', image: Kiwi },
  { id: 8, name: 'Papaya', price: 12, category: 'Fruits', image: Papaya },

  // Vegetables
  { id: 9, name: 'Organic Spinach', price: 75, category: 'Vegetables', image: Spinach },
  { id: 10, name: 'Bell Peppers', price: 22, category: 'Vegetables', image: BellPeppers },
  { id: 11, name: 'Cherry Tomatoes', price: 74, category: 'Vegetables', image: Tomato },
  { id: 12, name: 'Potato', price: 55, category: 'Vegetables', image: Potato },
  { id: 13, name: 'Cucumber', price: 22, category: 'Vegetables', image: Cucumber },
  { id: 14, name: 'LadyFinger', price: 76, category: 'Vegetables', image: LadyFinger },
  { id: 15, name: 'Onion', price: 85, category: 'Vegetables', image: Onion },
  { id: 16, name: 'Garlic', price: 56, category: 'Vegetables', image: Garlic },


  // Dairy
  { id: 17, name: 'Greek Yogurt', price: 88, category: 'Dairy', image: Yogurt },
  { id: 18, name: 'Organic Milk', price: 21, category: 'Dairy', image: Milk },
  { id: 19, name: 'Cheddar Cheese', price: 77, category: 'Dairy', image: CheddarCheese },
  { id: 20, name: 'Farm Butter', price: 55, category: 'Dairy', image: Butter },
  { id: 21, name: 'Sour Cream', price: 99, category: 'Dairy', image: Cream },
  { id: 22, name: 'Paneer', price: 125, category: 'Dairy', image: Paneer },
  { id: 23, name: 'Vanilla Ice Cream', price: 500, category: 'Dairy', image: IceCream },
  { id: 24, name: 'Ghee', price: 55, category: 'Dairy', image: Ghee },

  // Beverages
  { id: 25, name: ' Water', price: 55, category: 'Beverages', image: Water },
  { id: 26, name: ' Orange Juice', price: 85, category: 'Beverages', image: OrangeJuice },
  { id: 27, name: ' Coffee', price: 96, category: 'Beverages', image: Coffee },
  { id: 28, name: 'Green Tea', price: 74, category: 'Beverages', image: Tea },
  { id: 29, name: 'Energy Drink', price: 94, category: 'Beverages', image: EnergyDrink },
  { id: 30, name: 'Coconut Water', price: 29, category: 'Beverages', image: CoconutWater },
  { id: 31, name: 'Cola', price: 55, category: 'Beverages', image: Cola },
  { id: 32, name: 'Lassi', price: 44, category: 'Beverages', image: Lassi },

  // Snacks
  { id: 33, name: 'Chocolate Cookies', price: 66, category: 'Snacks', image: Cookies },
  { id: 34, name: 'Potato Chips', price: 88, category: 'Snacks', image: Chips },
  { id: 35, name: 'Mixed Nuts', price: 86, category: 'Snacks', image: Nuts },
  { id: 36, name: 'Granola Bars', price: 36, category: 'Snacks', image: Granola },
  { id: 37, name: 'Popcorn', price: 44, category: 'Snacks', image: Popcorn },
  { id: 38, name: 'Pretzels', price: 27, category: 'Snacks', image: Pretzels },
  { id: 39, name: 'Trail Mix', price: 47, category: 'Snacks', image: TrailMix },
  { id: 40, name: 'Chocolate Bar', price: 10, category: 'Snacks', image: ChocolateBar },



  // Seafood
  { id: 41, name: 'Lobster Tail', price: 14, category: 'Seafood', image: Lobster },
  { id: 42, name: 'Blue Crab', price: 12, category: 'Seafood', image: Crab },
  { id: 43, name: 'Scallops', price: 138, category: 'Seafood', image: Scallops },
  { id: 44, name: 'Mussels', price: 555, category: 'Seafood', image: Mussels },
  { id: 45, name: 'Oysters', price: 69, category: 'Seafood', image: Oysters },
  { id: 46, name: 'King Crab Legs', price: 190, category: 'Seafood', image: KingCrab },
  { id: 47, name: 'Anchovies', price: 58, category: 'Seafood', image: Anchovies },
  { id: 48, name: 'Smokehouse Mackerel', price: 56, category: 'Seafood', image: SmokehouseMackerel },


  // Bakery
  { id: 49, name: 'Sourdough Loaf', price: 47, category: 'Bakery', image: Sourdough },
  { id: 50, name: 'Brioche Bun', price: 28, category: 'Bakery', image: Brioche },
  { id: 51, name: 'Baguette', price: 25, category: 'Bakery', image: Baguette },
  { id: 52, name: 'Banana Bread', price: 39, category: 'Bakery', image: BananaBread },
  { id: 53, name: 'Choco Donut', price: 12, category: 'Bakery', image: ChocolateDonut },
  { id: 54, name: 'Eclair', price: 29, category: 'Bakery', image: Eclair },
  { id: 55, name: 'Pound Cake', price: 33, category: 'Bakery', image: PoundCake },
  { id: 56, name: 'Focaccia Bread', price: 48, category: 'Bakery', image: FocacciaBread },


  // Meat
  { id: 57, name: 'Lamb Chops', price: 98, category: 'Meat', image: LambChops },
  { id: 58, name: 'Turkey Breast', price: 72, category: 'Meat', image: TurkeyBreast },
  { id: 59, name: 'Veal Cutlet', price: 10, category: 'Meat', image: VealCutlet },
  { id: 60, name: 'Beef Steak', price: 850, category: 'Meat', image: BeefSteak },
  { id: 61, name: 'Duck Breast', price: 560, category: 'Meat', image: DuckBreast },
  { id: 62, name: 'Ham', price: 860, category: 'Meat', image: Ham },
  { id: 63, name: 'Meatballs', price: 900, category: 'Meat', image: MeatBalls },
  { id: 64, name: 'Pork Ribs', price: 869, category: 'Meat', image: PorkRibs },
];

export const orders = [
    {
      id: "ORD-78901",
      userId: "user-12345",
      date: "2023-06-15",
      deliveryDate: "2023-06-20",
      status: "Delivered",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      total: 124.95,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
      },
      items: [
        {
          id: "item-001",
          name: "Premium Wireless Headphones",
          price: 89.99,
          quantity: 1,
          image: ""
        },
        {
          id: "item-002",
          name: "Phone Case",
          price: 24.99,
          quantity: 2,
          image: ""
        }
      ],
      notes: "Please leave package at the front desk if I'm not home"
    },
    {
      id: "ORD-78902",
      userId: "user-12345",
      date: "2023-06-20",
      deliveryDate: "2023-06-25",
      status: "Processing",
      paymentStatus: "Paid",
      paymentMethod: "PayPal",
      total: 67.50,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
      },
      items: [
        {
          id: "item-003",
          name: "Smart Watch Band",
          price: 19.99,
          quantity: 1,
          image: ""
        },
        {
          id: "item-004",
          name: "Screen Protector",
          price: 11.99,
          quantity: 4,
          image: ""
        }
      ]
    },
    {
      id: "ORD-78903",
      userId: "user-12345",
      date: "2023-06-25",
      deliveryDate: "2023-06-30",
      status: "Shipped",
      paymentStatus: "Paid",
      paymentMethod: "Credit Card",
      total: 42.25,
      customer: {
        name: "Alex Johnson",
        phone: "+1 (555) 123-4567",
        email: "alex.johnson@example.com",
        address: "123 Main Street, Apt 4B, New York, NY 10001"
      },
      items: [
        {
          id: "item-005",
          name: "USB-C Charging Cable",
          price: 14.99,
          quantity: 2,
          image: ""
        },
        {
          id: "item-006",
          name: "Portable Power Bank",
          price: 29.99,
          quantity: 1,
          image: ""
        }
      ]
    }
  ];