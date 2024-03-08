// An array of objects representing my collection:
var data = [
    {
        name: 'Marina The Flower Cat',
        manufacturer: {
            name: 'Liberty\'s Things', 
            category:'independent',
        },
        creatures: ['cat', 'flower', 'plant'],
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/marina.png',
        url: 'https://www.instagram.com/p/C3vePLhqMkq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    /*---------------*/
    {
        name: 'Ralph the Glo Man',
        manufacturer: {
            name:'Glo Gang',
            category: 'corporate-owned'
        },
        creatures: ['humanoid sun energy hybrid with opioid addiction', 'sun', 'kind of undecided'],
        year: 2017,
        craft: 'mass produced',
        imageUrl: 'assets/ralph.png',
    },
    /*---------------*/
    {
        name: 'bleeding heart sproutling',
        manufacturer: {
            name:'Little Sproutling Nursery',
            category: 'independent'
        },
        creatures: ['anthropomorphic bleeding heart plant', 'plant'],
        year: 2022,
        craft: 'handmade',
        imageUrl:'assets/bh.png',
        url: 'https://www.instagram.com/p/Ck7QhJLsuef/?utm_source=ig_web_copy_link',
    },
    /*---------------*/
    {
        name: 'unnamed horsefly variant',
        manufacturer: {
            name: 'Little Sproutling Nursery', 
            category: 'independent',
        },
        creatures: ['horsefly type','bug/insect'],
        year: 2023,
        craft: 'handmade',
        imageUrl:'assets/horsefly.png',
        url: 'https://www.instagram.com/p/C2vL0snvdLd/?utm_source=ig_web_copy_link',
    },
/*---------------*/
    {
        name: 'Daisy',
        manufacturer: {
            name: 'Petulant Pretty',
            category: 'independent',
        },
        creatures: 'lamb',
        year: 2023, 
        craft: 'handmade',
        imageUrl:'assets/daisy.png',
        url: 'https://www.etsy.com/listing/1514975979/pre-order-daisy-lamb-art-plushie?click_key=86a4d67c433b04d76f32c5f9ccedac58fa55ed45%3A1514975979&click_sum=48cff9ba&ref=shop_home_active_14&crt=1',

    },
/*------------------*/
    {
        name: 'unstuffed Hugo',
        manufacturer: {
            name: 'Demi\'s Plush Corner',
            category: 'independent',

        },
        creatures: 'cow',
        year: 2022,
        craft: 'handmade',
        imageUrl: 'assets/realist.png',
        url: 'https://www.instagram.com/p/CmCj-0YNmg0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',


    },
/*---------------*/
    {
        name: 'Stuart',
        manufacturer: {
            name: 'The Cat\'s Pajamas',
            category: 'independent', 
        },
        creatures: 'cat',
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/stuart.png',
        url: 'https://www.instagram.com/p/Cn5I941pFZ9/?img_index=1',
    },
    /*---------------*/
    {
        name: 'Fabfuzz Calliope Pony',
        manufacturer: {
            name: 'Presley Paige',
            category: 'corporate-owned',
        },
        creatures: ['pony'],
        year: 2018,
        craft: 'mass produced',
        imageUrl: 'assets/calliope.png',
        url: 'https://www.bloomingdales.com/shop/product/bestever-fabfuzz-calliope-pony-plush-ages-2?ID=4169874&pla_country=US&cm_mmc=Google-PLA-ADC-_-GS_Local+Only-_-All+Products-_-719771557902-_-go_cmp-325403191_adg-23120909431_ad-80153669791_pla-296731747429_dev-c_ext-_prd-719771557902&gad_source=1&gclid=CjwKCAiAopuvBhBCEiwAm8jaMU_87DCLgyB1ufTsvTg96fK13k170GoINxFRRd3_njwb27oLXKhd3RoCB7QQAvD_BwE',

    },
    /*---------------*/
    {
        name: 'Funceratops Clown Triceratops Plushie Kawaii Tiny Plush Cute Fluffy Pastel Circus Clowncore ',
        manufacturer: {
            name: 'cutiepies', 
            category: 'independent',
        },
        creatures: ['clown', 'rhinoceros', 'funceratops', 'triceratops',],
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/rhino.png',
        url: 'https://www.etsy.com/listing/1477873720/funceratops-clown-triceratops-plushie',
    },
    /*---------------*/
    {
        name: 'sakura inspired flying goat',
        manufacturer:{
            name: 'cirquell curiosities', 
            category: ' independent',
        },
        creatures: ['flying goat', 'goat'],
        year: 2022,
        craft:'handmade',
        imageUrl:'assets/sakura.png',
        url: 'https://www.instagram.com/p/CkeiJmBv40S/?utm_source=ig_web_copy_link',
    },
    /*---------------*/
    {
        name: 'Bunnini Bunny',
        manufacturer: {
            name: 'Mirianata', 
            category: 'independent'
        },
        creatures: 'bunny',
        year: 2012,
        craft: 'handmade',
        imageUrl: 'assets/tumb.png',
        url: 'https://www.etsy.com/listing/104789193/bunnini-bunny?show_sold_out_detail=1&ref=nla_listing_details',
    },
    /*---------------*/
    {
        name: 'Annalee Cupid’s Angel Mice',
        manufacturer: {
            name: 'Annalee Thorndike',
            category: 'independent',
        },
        creatures: ['mice', 'angel'],
        year: 1993,
        craft: 'handmade',
        imageUrl: 'assets/mice.png',
        url: 'https://www.etsy.com/listing/1653479298/vintage-pair-of-1993-annalee-cupids?epik=dj0yJnU9VW5veU9Jd25KMl9mZGhpMFRZa1NzRWRURGRvRVpKU00mcD0wJm49Nk1tZm95RDFrdGNlRnlKQnh0OWFzdyZ0PUFBQUFBR1huZFNV',
        
    },
    /*---------------*/
    {
        name: 'Graceful Deer',
        manufacturer: {
            name: ['Nyssa Benthin', 'Lithe-Fider'],
            category: 'independent',
        },
        creatures: 'deer',
        year: 2016, 
        craft: 'handmade',
        imageUrl: 'assets/deer.png',
        url: 'https://lithefidercreatures.tumblr.com/post/153292351386/the-celestial-deer-is-done-im-calling-this',
    },
    /*---------------*/
    {
        name: 'Baphomet vers 1',
        manufacturer: {
            brand: 'mylittlesatan',
            category:'independent',
        },
        creatures: ['baphomet', 'amibguous animal'],
        year: 2019,
        craft: 'handmade',
        imageUrl: 'assets/wb.png',
        url: 'https://www.etsy.com/listing/495335454/baphomet-plush?variation0=705907599&variation1=1592285905&epik=dj0yJnU9eERQdVRaRmJSazlIdGdEcHpkQldXZzNwM1JjRmJTajYmcD0wJm49SkhWR1lhS05UZnNQMEZVXzBzNEtpUSZ0PUFBQUFBR1hvRGNV',
    },
    /*---------------*/
    {
        name: 'Baphomet vers 2',
        manufacturer: {
            brand: 'mylittlesatan',
            category:'independent',
        },
        creatures: ['baphomet', 'amibguous animal'],
        year: 2019,
        craft: 'handmade',
        imageUrl: 'assets/bb.png',
        url: 'https://www.etsy.com/listing/495335454/baphomet-plush?variation0=705907599&variation1=1592285905&epik=dj0yJnU9eERQdVRaRmJSazlIdGdEcHpkQldXZzNwM1JjRmJTajYmcD0wJm49SkhWR1lhS05UZnNQMEZVXzBzNEtpUSZ0PUFBQUFBR1hvRGNV',
    },
    /*---------------*/
    {
        name: 'White Beaver',
        manufacturer: {
            name: 'Elizabeth Mcgrath',
            category: 'unknown',
        },
        creatures: 'beaver',
        year: '2016',
        craft: 'unknown',
        imageUrl: 'assets/gerbil.png',
        url: 'https://elizabethmcgrath.com/thumbnail',
    },
    /*---------------*/
    {
        name: 'unnamed multi-eyed upcycled/remixed beanie baby',
        manufacturer: {
            name: ['Beanie Babies', 'unknown remixer'],
            category: ['independent', 'corporate-owned'],
        },
        creatures: ['sheep', 'lamb'],
        craft: 'handmade',
        year: 'unknown',
        imageUrl: 'assets/unk.png',
        url: 'https://pin.it/3mUqzL6fU',

    },
    /*---------------*/
    {
        name: 'Squishable Alter Ego Plague Doctor',
        manufacturer: {
            name: 'Off the Wagon',
            category:'corporate-owned', 
        },
        creatures: ['druid', 'druid plague doctor', 'plague doctor'],
        craft: 'mass produced',
        year: 'unknown',
        imageUrl: 'assets/plague.png',
        url: 'https://www.offthewagonshop.com/products/squishable-alter-ego-plague-doctor?pr_prod_strat=jac&pr_rec_id=d5aca2508&pr_rec_pid=7811562897569&pr_ref_pid=7711109972129&pr_seq=uniform',
    },
    /*---------------*/
    {
        name: 'cosmic brownie gremlin baby',
        manufacturer: {
            name: 'Boo the Shy Ghost',
            category: 'independent'
        },
        creatures: 'cosmic brownie gremlin baby',
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/cosmic.png',
        url: 'https://www.instagram.com/p/Cw8KxbeOdsU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        name: 'Penny',
        manufacturer: {
            name: ['Aerlinn Bears', 'Esther Pepper'],
            category: 'independent',
        },
        creatures: 'bear',
        year: 2012,
        craft: 'handmade',
        imageUrl: "assets/blue.png",
        url: 'https://www.etsy.com/listing/1116403500/penny-pdf-pattern-5-12-teddy-bear-by?click_key=d593b0326171caee32470920fa2f333b6da7c245%3A1116403500&click_sum=7c115621&ref=shop_home_active_1',
    },
    {
        name: 'unnamed Austrailian Shepard',
        manufacturer: {
            name: 'Rakel\'s Thingies',
            category: 'independent',
    },
            creatures: 'austrailian shepard dog',
            year: 2024,
            craft: 'handmade',
            imageUrl: "assets/aus.png",
            url: 'https://www.instagram.com/p/C22fHsQLvOk/?utm_source=ig_web_copy_link',
    },
    {
        name: 'ScareBo',
        manufacturer: {
            name: 'Tiny Toy Studio',
            category: 'independent',
        },
            creatures: ['bear', 'skeleton'],
            year: 2023,
            craft: 'handmade',
            imageUrl: 'assets/cosbo.png',
            url: 'https://www.instagram.com/p/CxQmOyuLBQx/?utm_source=ig_web_copy_link',
    },
    {
        name: 'Flower power Tortoise',
        manufacturer: {
            name: 'Boo the Shy Ghost',
            category: 'independent'
        },
        creatures: 'tortoise',
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/tort.png',
        url: "https://www.instagram.com/p/Cr84NHquRcP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
        name: 'Dreamy moon shaggy bunny',
        manufacturer: {
            name: 'Boo the Shy Ghost',
            category: 'independent'
        },
        creatures: 'bunny',
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/dream.png',
        url: 'https://www.instagram.com/p/CvDJdChx3G6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        name: 'Grumpy Mantis',
        manufacturer: {
            name: 'Periwinkle Plush',
            category: 'independent'
        },
        creatures: ['bug/insect', 'Praying Mantis'],
        year: 2024,
        craft: 'handmade',
        imageUrl: 'assets/mantis.png',
        url: 'https://www.instagram.com/p/C1vGUi3JFXR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        name: 'Party Stuart',
        manufacturer: {
            name: 'The Cat\'s Pajamas',
            category: 'independent',
        },
        creatures: 'cat',
        year: 2023,
        craft: 'handmade',
        imageUrl: 'assets/pstuart.png',
        url: 'https://www.instagram.com/p/CviTbgmPBU8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
];