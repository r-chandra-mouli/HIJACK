const products = [
    {
      "product-id": 201,
      "product-name": "Glock 19",
      "product-image-src": "https://image.invaluable.com/housePhotos/bradfordsauction/42/688942/H22021-L233874612_original.jpg",
      "price": 549.99,
      "description": "The Glock 19 is a compact 9mm pistol, renowned for its reliability and ease of use. Ideal for personal defense, law enforcement, or concealed carry, it offers a 15-round magazine capacity and a lightweight polymer frame, making it highly maneuverable in various situations."
    },
    {
      "product-id": 202,
      "product-name": "Smith & Wesson M&P Shield",
      "product-image-src": "https://th.bing.com/th/id/OIP.EllBLLSaMmgd40Z-yrktpAHaGM?rs=1&pid=ImgDetMain",
      "price": 469.99,
      "description": "The M&P Shield is a compact, striker-fired pistol perfect for concealed carry. With a slim profile and chambered in 9mm, it combines portability with excellent accuracy and reliability. Its ergonomic grip and smooth trigger pull make it a favorite for personal defense and professional use."
    },
    {
      "product-id": 203,
      "product-name": "Sig Sauer P320",
      "product-image-src": "https://th.bing.com/th/id/OIP.ucM7zwbRHY4MYKtCYeOM9QHaHa?rs=1&pid=ImgDetMain",
      "price": 599.99,
      "description": "The P320 is a highly modular, striker-fired handgun that allows for easy customization with its interchangeable grip modules and calibers. Known for its outstanding performance, the P320 offers superb accuracy, reliability, and a smooth trigger, making it suitable for both defense and sport shooting."
    },
    {
      "product-id": 204,
      "product-name": "Colt M4 Carbine",
      "product-image-src": "https://cityarsenal.com/wp-content/uploads/2021/04/CTCR6920_1_HR.jpg",
      "price": 1499.99,
      "description": "The Colt M4 Carbine is a versatile, lightweight rifle widely used by military and law enforcement. With a semi-automatic action and a 16-inch barrel, it excels in both short and long-range shooting. Its modular design allows for easy customization with optics, grips, and other accessories."
    },
    {
      "product-id": 205,
      "product-name": "Remington 700",
      "product-image-src": "https://th.bing.com/th/id/R.2d275c6c03a39282c5c36d73c6183cb4?rik=Y6C6u9owflI3hw&riu=http%3a%2f%2fgunsamerica.com%2fuserimages%2f5212%2f939497774%2fwm_7336652.jpg&ehk=DoRLDOTs2SGJaZhWaHdPIwpdwHOUUOYR0yH23XMT%2bdo%3d&risl=&pid=ImgRaw&r=0",
      "price": 999.99,
      "description": "The Remington 700 is a bolt-action rifle known for its accuracy and dependability, making it a popular choice for hunters and precision shooters. With a strong, durable design and customizable features, it is ideal for long-range shooting and offers excellent performance in all weather conditions."
    },
    {
      "product-id": 206,
      "product-name": "Barrett M82",
      "product-image-src": "https://th.bing.com/th/id/OIP.UrrjhaD5pKzG62Z9L_by8gHaCX?rs=1&pid=ImgDetMain",
      "price": 8999.99,
      "description": "The Barrett M82 is a semi-automatic, .50 caliber rifle designed for long-range sniper operations. Known for its incredible stopping power, the M82 is used by militaries worldwide. Its robust design and high accuracy make it one of the most powerful anti-material rifles available."
    },
    {
      "product-id": 207,
      "product-name": "Springfield Armory M1A",
      "product-image-src": "https://th.bing.com/th/id/OIP.CyNLPA3EUr9vytg-RI7BTAHaEU?rs=1&pid=ImgDetMain",
      "price": 1799.99,
      "description": "The Springfield Armory M1A is a semi-automatic rifle, modeled after the M14 military rifle. It is revered for its reliability, precision, and solid construction. With a gas-operated mechanism and iron sights, it is a great option for both competitive shooting and defense."
    },
    {
      "product-id": 208,
      "product-name": "Uzi Pro",
      "product-image-src": "https://th.bing.com/th/id/OIP.oRa7Cpi5042N98ldaJYqOgHaGb?rs=1&pid=ImgDetMain",
      "price": 699.99,
      "description": "The Uzi Pro is a compact submachine gun, based on the original Uzi design. Lightweight and highly maneuverable, it is ideal for close-quarters combat. The Uzi Pro's modern enhancements include improved ergonomics, a Picatinny rail for accessories, and a folding stock for better handling."
    },
    {
      "product-id": 209,
      "product-name": "Heckler & Koch MP5",
      "product-image-src": "https://th.bing.com/th/id/OIP.PZQbwtHSz15NVlWcftt6sQHaDS?rs=1&pid=ImgDetMain",
      "price": 1799.99,
      "description": "The Heckler & Koch MP5 is one of the most iconic submachine guns in the world, favored by elite military and law enforcement units. Chambered in 9mm, it delivers excellent accuracy and low recoil, making it ideal for close-quarters engagements and tactical operations."
    },
    {
      "product-id": 210,
      "product-name": "CZ Scorpion EVO 3",
      "product-image-src": "https://th.bing.com/th/id/OIP.fFh1w_2h6Ra7B82EXvxtggHaE7?rs=1&pid=ImgDetMain",
      "price": 899.99,
      "description": "The CZ Scorpion EVO 3 is a modern submachine gun designed for tactical use. Chambered in 9mm, it features a compact design with low recoil, making it highly controllable in rapid fire. The Scorpion EVO 3 is widely praised for its ergonomics, reliability, and ease of customization."
    },
    {
      "product-id": 211,
      "product-name": "Benelli M4",
      "product-image-src": "https://assets.cabelas.ca/image/upload/q_auto:eco,f_auto/c_scale,w_auto/dpr_auto/ProductImages/44057-276179",
      "price": 1399.99,
      "description": "The Benelli M4 is a 12-gauge, semi-automatic shotgun designed for military and law enforcement. It features a gas-operated system that ensures reliability even under harsh conditions. Its tactical design makes it ideal for defense, with an adjustable stock and accessory rails for customization."
    },
    {
      "product-id": 212,
      "product-name": "Remington 870",
      "product-image-src": "https://www.sportsmans.com/medias/remington-870-hardwood-home-defense-pump-shotgun-1477412-1.jpg?context=bWFzdGVyfGltYWdlc3wxNzM1ODN8aW1hZ2UvanBlZ3xpbWFnZXMvaDgyL2g3NS84OTgwNzU5ODA1OTgyLmpwZ3wzMDg2ZjA3OWZlOWIyZGExZTJiNDdlY2YyODYyN2Q3MGVlOThlZmQzZWI2ZTRmMmYwZDU3NzY0YzNlYTYzMzdl",
      "price": 399.99,
      "description": "The Remington 870 is a pump-action shotgun known for its durability and versatility. Ideal for hunting, sport shooting, and home defense, the 870 is available in various configurations. It is widely praised for its smooth action, reliability, and ability to handle a variety of shotgun shells."
    },
    {
      "product-id": 213,
      "product-name": "CheyTac M200 Intervention",
      "product-image-src": "https://th.bing.com/th/id/OIP.yXFJo6IeZon57BGEjXDlywHaEK?rs=1&pid=ImgDetMain",
      "price": 12000.00,
      "description": "The CheyTac M200 Intervention is a high-precision sniper rifle designed for extreme long-range shooting. It is capable of engaging targets over a mile away with unmatched accuracy. The rifle is used by military snipers and elite marksmen for its exceptional performance and ballistic capabilities."
    },
    {
      "product-id": 214,
      "product-name": "Accuracy International AXMC",
      "product-image-src": "https://th.bing.com/th/id/OIP.cyea9UttlEtW93j2e07ASAHaHa?rs=1&pid=ImgDetMain",
      "price": 6500.00,
      "description": "The Accuracy International AXMC is a multi-caliber sniper rifle that offers unmatched versatility and precision. Designed for military and law enforcement, the AXMC can be easily converted between different calibers, making it suitable for a variety of long-range missions. It features a highly durable chassis system."
    },
    {
      "product-id": 215,
      "product-name": "FGM-148 Javelin",
      "product-image-src": "https://static.turbosquid.com/Preview/2017/03/06__05_37_20/Anti_Tank_Missile_FGM_148_Javelin_Set_001.jpgAFEB02A3-1305-47B7-B9BC-C23045F6C5AFOriginal.jpg",
      "price": 79999.99,
      "description": "The FGM-148 Javelin is a portable, fire-and-forget anti-tank missile system used by infantry forces. It is capable of destroying tanks, armored vehicles, and fortifications with precision. The Javelin's infrared guidance system and top-attack capabilities make it highly effective in modern combat scenarios."
    },
    {
      "product-id": 216,
      "product-name": "AGM-114 Hellfire",
      "product-image-src": "https://th.bing.com/th/id/OIP.Q0t1wg3spwaAnVW9yg37MAHaF7?rs=1&pid=ImgDetMain",
      "price": 114000.00,
      "description": "The AGM-114 Hellfire is an air-to-ground missile used primarily for precision strikes against armored vehicles, bunkers, and high-value targets. It is often deployed from helicopters and drones. The Hellfire's versatility, precision, and destructive power make it one of the most widely used missiles in military operations."
    },
    {
      "product-id": 217,
      "product-name": "9mm Luger Ammo",
      "product-image-src": "https://th.bing.com/th/id/OIP.OH2W7976yX8_1WftCyrUGwHaHa?rs=1&pid=ImgDetMain",
      "price": 19.99,
      "description": "The 9mm Luger is one of the most popular handgun cartridges in the world, known for its balanced performance in terms of power, recoil, and availability. It is widely used in law enforcement, military, and civilian applications for self-defense and target shooting."
    },
    {
      "product-id": 218,
      "product-name": "5.56x45mm NATO Ammo",
      "product-image-src": "https://th.bing.com/th/id/OIP.m1bpetivWVuoZv_4YmBlqAHaHa?rs=1&pid=ImgDetMain",
      "price": 39.99,
      "description": "The 5.56x45mm NATO is a standard-issue rifle cartridge used by many militaries around the world. It is designed for high velocity and flat trajectory, making it ideal for medium-range engagements. The cartridge is commonly used in rifles like the M16, M4, and their variants."
    },
    {
      "product-id": 219,
      "product-name": "7.62x51mm NATO Ammo",
      "product-image-src": "https://th.bing.com/th/id/R.4f754a1b673ca0d925ac13bd729de676?rik=gQgWUH7otxkseg&riu=http%3a%2f%2fimage.sportsmansguide.com%2fadimgs%2fl%2f5%2f594032i2_ts.jpg&ehk=dEYPIhOu2HKdv%2bE3bGPdiMNUcyJREU4tdM%2fxMDKgL4w%3d&risl=&pid=ImgRaw&r=0",
      "price": 49.99,
      "description": "The 7.62x51mm NATO is a powerful rifle cartridge used in both military and civilian applications. Known for its accuracy and stopping power, it is commonly used in sniper rifles, battle rifles, and machine guns. It offers excellent long-range performance and penetration."
    },
    {
      "product-id": 220,
      "product-name": "12 Gauge Shotgun Shells",
      "product-image-src": "https://qph.fs.quoracdn.net/main-qimg-c86e8cae4603d9d1d9d7197ec36a8ec1",
      "price": 14.99,
      "description": "The 12-gauge shotgun shell is a versatile and widely used cartridge for shotguns. It is available in a variety of loadings, including birdshot, buckshot, and slugs, making it suitable for hunting, sport shooting, and defense. Its high stopping power makes it ideal for close-range engagements."
    }
  ]
  

export default products;
