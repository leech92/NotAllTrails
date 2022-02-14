# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Park.destroy_all
Trail.destroy_all
Review.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('parks')
ApplicationRecord.connection.reset_pk_sequence!('trails')
ApplicationRecord.connection.reset_pk_sequence!('reviews')

demo = User.create!(first_name: "Demo", last_name: "Demo", email: "demo@demo.com", password: "password123")
user1 = User.create!(first_name: "Derrick", last_name: "Toes", email: "dtoes88@abc.com", password: "password123", brief_bio: "I like to play basketball, but I love to hike.")
user2 = User.create!(first_name: "Ash", last_name: "Ketchup", email: "aketchup90@abc.com", password: "password123", brief_bio: "Gotta catch 'em all.")
user3 = User.create!(first_name: "Mike", last_name: "Bison", email: "mbison81@abc.com", password: "password123", brief_bio: "I'm looking for challenging hikes to build up my stamina.")
user4 = User.create!(first_name: "Hairy", last_name: "Potter", email: "hpotter89@abc.com", password: "password123", brief_bio: "Does anyone know where I can find the locket of Salazar Slytherin?")
user5 = User.create!(first_name: "Phyllis", last_name: "Dance", email: "pdance80@abc.com", password: "password123", brief_bio: "I like to go on hikes near Scranton, Pennsylvania.")

park1 = Park.create!(park_name: "Zion National Park", 
                     description: "Zion National Park is a unique landscape with high cliffs, narrow gorges and a beautiful view. The park has many famous walks. Angels Landing is an intense switchback trail with truly spectacular views from the top of the canyon. Another famous hike is the unique Narrows \"Trail\", a very long hike through a river that lies between a steep gorge. Other notable trails include the East Rim Trail to the park's highest point, the Slot Canyon Subway Trail, and the family-friendly but equally beautiful Kayenta Trail. There's also the paved Emerald Pools Trail and the more challenging West Rim Trail for backpackers. Please note that some hikes in this park require a permit. Please inquire before your visit. The park is open to visitors around the clock. Please note, however, that not all areas including the entrance and the visitor center are occupied or open. Please also note that roads, trails and other parks in the park are closed seasonally. Shuttle buses do not run from late November to mid-February.",
                     acreage: 146597,
                     contact: "435-772-3256",
                     country: "United States of America",
                     state: "Utah",
                     latitude: 37.2982,
                     longitude: -113.0263)

park2 = Park.create!(park_name: "Acadia National Park", 
                     description: "Acadia National Park attracts more than two million visitors each year. With many different facilities and attractions in the park, there is something to interest everyone. Hiking and mountain biking are among the most popular activities in Acadia National Park. There are freshwater, estuary, forest, and intertidal habitats and 158 miles of hiking trails. Acadia National Park is open 24 hours per day, but the Visitor's Center has more limited hours. It is open from 8:30 AM- 4:00 PM, except for July and August when it is open 8:00 AM - 6:00 PM. This Visitor's Center is closed November 1 through April 30 every year.",
                     acreage: 49076,
                     contact: "207-288-3338",
                     country: "United States of America",
                     state: "Maine",
                     latitude: 44.3386,
                     longitude: -68.2733)

park3 = Park.create!(park_name: "Shenandoah National Park", 
                     description: "Located along the Blue Ridge Mountains, Shenandoah National Park runs with the broad Shenandoah River, valleys, and rolling hills. Covered in forest, Skyline Drive and the famous Appalachian Trail run the entire length of this narrow park. There is so much more to explore including scenic overlooks, waterfalls of the Shenandoah River, and Hawksbill Mountain, the highest peak. Shenandoah National Park is always open. However, portions of Skyline Drive -- the only public road through the park -- are periodically closed during inclement weather. Visitors may still enter the park on foot to hike even when the drive is closed.",
                     acreage: 197439,
                     contact: "540-999-3500",
                     country: "United States of America",
                     state: "Virginia",
                     latitude: 38.4755,
                     longitude: -78.4535)

trail1 = Trail.create!(trail_name: "Angels Landing Trail",
                       description: "Angels Landing Trail is a 4.4 mile heavily trafficked out and back trail located near Springdale, Utah that features a river and is rated as difficult. The trail is primarily used for hiking and nature trips and is best used from February until October. The Angels Landing Trail is a strenuous route in Zion National Park with steep drop-offs and very narrow sections. The technical route and incredible views of Zion Canyon make this hike the most popular in Zion.",
                       difficulty: "hard",
                       length: 4.4,
                       elevation: 1604,
                       route: "Out & back",
                       latitude: 37.2690,
                       longitude: -112.9469,
                       duration: "Est. 2h 51m",
                       park_id: park1.id)

trail1.photo.attach(io: File.open('app/assets/images/aws/Zion_Angels.jpg'), filename: 'Zion_Angels.jpg')

trail2 = Trail.create!(trail_name: "Zion Canyon Overlook Trail",
                       description: "Zion Canyon Overlook Trail is a 1 mile heavily trafficked out and back trail located near Springdale, Utah that features a cave and is rated as moderate. The trail is primarily used for hiking and walking and is accessible year-round. The Canyon Overlook Trail offers some of the most breathtaking views of Zion Canyon. The trailhead is a collection of stone steps that ascend the ridge directly across the road from the first parking area. The trail passes through shaded alcoves with ferns and trees, across a planked boardwalk and through a moist grotto, and over bare slick rock, wandering its way to the edge of an impressive cliff overlook. Although mostly flat and easy, there are sections with steep drop offs on one side. These sections have railings, but those with children should be careful.",
                       difficulty: "moderate",
                       length: 1.0,
                       elevation: 187,
                       route: "Out & back",
                       latitude: 37.2133,
                       longitude: -112.9407,
                       duration: "Est. 32m",
                       park_id: park1.id)

trail2.photo.attach(io: File.open('app/assets/images/aws/Zion_Overlook.jpg'), filename: 'Zion_Overlook.jpg')

trail3 = Trail.create!(trail_name: "Zion Narrows Bottom Up to Big Springs",
                       description: "Zion Narrows Bottom Up to Big Springs is a 8.9 mile heavily trafficked out and back trail located near Springdale, Utah that features a waterfall and is rated as difficult. The trail is primarily used for hiking. The Narrows is one of the most iconic day hikes in Zion National Park named for being the most narrow spot in Zion Canyon. As you hike through the blue water in the gorge, you will look up at rocky canyon walls a thousand feet tall as you walk through the Virgin River. Water levels can vary from ankle deep to chest high, and as with all slot canyons, caution should be used and the weather forecast should be checked.",
                       difficulty: "hard",
                       length: 8.9,
                       elevation: 695,
                       route: "Out & back",
                       latitude: 37.2849,
                       longitude: -112.9479,
                       duration: "Est. 4h 3m",
                       park_id: park1.id)

trail3.photo.attach(io: File.open('app/assets/images/aws/Zion_Narrows.jpg'), filename: 'Zion_Narrows.jpg')

trail4 = Trail.create!(trail_name: "The Beehive Loop Trail",
                       description: "The Beehive Loop Trail is a 1.5 mile heavily trafficked loop trail located near Bar Harbor, Maine that features a lake and is rated as difficult. The trail is primarily used for hiking and is best used from May until October. The Beehive Trail Loop is a must-do hike for all visitors to Acadia National Park. This popular loop offers incredible views, with some challenging rung and ladder sections. This loop starts at the Sand Beach Parking Lot, traverses over the Beehive, reaches the Bowl Pond, and then loops back on the Bowl Trail.",
                       difficulty: "hard",
                       length: 1.5,
                       elevation: 508,
                       route: "Loop",
                       latitude: 44.3333,
                       longitude: -68.1885,
                       duration: "Est. 57m",
                       park_id: park2.id)

trail4.photo.attach(io: File.open('app/assets/images/aws/Acadia_Beehive.jpg'), filename: 'Acadia_Beehive.jpg')

trail5 = Trail.create!(trail_name: "Ocean Path Trail",
                       description: "Ocean Path Trail is a 4.5 mile heavily trafficked out and back trail located near Bar Harbor, Maine that features beautiful wild flowers and is good for all skill levels. The trail is primarily used for walking, running, and bird watching and is accessible year-round. Dogs are also able to use this trail but must be kept on leash. Starting at the south end of the upper Sand Beach Parking lot, the easy 2.2 mile mostly flat one-way Ocean Path trail parallels the loop road all the way to Otter Point.  The path offers scenic views and numerous access points to outcroppings above the rocky shore, including major attractions like Thunder Hole and Otter Cliff.  Great trail to stroll or to deviate and explore the best Acadia has to offer.  Get to the area early before any tour buses or late around sunset and you can have the shoreline mostly all to yourself.",
                       difficulty: "easy",
                       length: 4.5,
                       elevation: 374,
                       route: "Out & Back",
                       latitude: 44.3157,
                       longitude: -68.1908,
                       duration: "Est. 2h 4m",
                       park_id: park2.id)

trail5.photo.attach(io: File.open('app/assets/images/aws/Acadia_Ocean.jpg'), filename: 'Acadia_Ocean.jpg')

trail6 = Trail.create!(trail_name: "Jordan Pond Path",
                       description: "Jordan Pond Path is a 3.1 mile heavily trafficked loop trail located near Mount Desert, Maine that features a lake and is rated as moderate. The trail is primarily used for hiking, running, and bird watching and is best used from April until October. Dogs are also able to use this trail but must be kept on leash. Great views on a lot of the walk around the lake. This trail can get crowded at points, especially on the parts where there were narrower wooden walkways for paths. Go early, as it can be difficult to find a parking spot due to its traffic. The backdrop of the pond and bubbles are beautiful as you meander through the woods along the pond. The boardwalks are unique, and outside of a couple muddy spots, a trail that is very enjoyable and easy. There’s a section with some rocky terrain but other than that it’s a flat, easy, peaceful walk suitable for just about anyone. There are a couple sandy areas as well where people can step aside and relax on the shore.",
                       difficulty: "moderate",
                       length: 3.1,
                       elevation: 42,
                       route: "Loop",
                       latitude: 44.3341,
                       longitude: -68.2571,
                       duration: "Est. 1h 17m",
                       park_id: park2.id)

trail6.photo.attach(io: File.open('app/assets/images/aws/Acadia_Jordan.jpg'), filename: 'Acadia_Jordan.jpg')

trail7 = Trail.create!(trail_name: "Old Rag Mountain Loop",
                       description: "Old Rag Mountain Loop is a 9.5 mile heavily trafficked loop trail located near Etlan, Virginia that features a river and is rated as difficult. The trail is primarily used for hiking and is best used from May until October. This hike, although challenging, is one of the most popular hikes in Shenandoah National Park. It has been referred to as a “brutally awesome” hike by many. Your climb to the peak includes many rocky switchbacks, so you will not be going straight up, but the trails are still at a steep grade. The descent, which will be slightly longer than your ascent, is a much more gradual grade that ends on a fire trail.",
                       difficulty: "hard",
                       length: 9.5,
                       elevation: 2683,
                       route: "Loop",
                       latitude: 38.5517,
                       longitude: -78.3158,
                       duration: "Est. 5h 38m",
                       park_id: park3.id)

trail7.photo.attach(io: File.open('app/assets/images/aws/Shenandoah_Old.jpg'), filename: 'Shenandoah_Old.jpg')

trail8 = Trail.create!(trail_name: "Rose River Trail",
                       description: "Rose River Trail is a 3.8 mile heavily trafficked loop trail located near Syria, Virginia that features a waterfall and is rated as moderate. The trail is primarily used for hiking. Dogs are also able to use this trail but must be kept on leash. The Rose River Trail, or Rose River Loop Trail, is best known for the Rose River Falls, but it also offers other smaller cascades to view along the route, a beautiful hike along the Rose River, and an off-the-path cave cemetery.",
                       difficulty: "moderate",
                       length: 3.8,
                       elevation: 875,
                       route: "Loop",
                       latitude: 38.5112,
                       longitude: -78.3794,
                       duration: "Est. 2h 7m",
                       park_id: park3.id)

trail8.photo.attach(io: File.open('app/assets/images/aws/Shenandoah_Rose.jpg'), filename: 'Shenandoah_Rose.jpg')

trail9 = Trail.create!(trail_name: "Bearfence Mountain Trail",
                       description: "Bearfence Mountain Trail is a 1 mile heavily trafficked loop trail located near Hood, Virginia that features beautiful wild flowers and is rated as moderate. The trail is primarily used for hiking and bird watching and is best used from April until October. The Bearfence Trail leads up a steep slope that eventually turns into rock scrambles until you reach the summit of Bearfence Mountain. Blazes mark the best scramble climbing route. The view from the summit is well worth the climb as it is one of only three summits in the park that has a 360-degree view.",
                       difficulty: "moderate",
                       length: 1.0,
                       elevation: 242,
                       route: "Loop",
                       latitude: 38.4471,
                       longitude: -78.4647,
                       duration: "Est. 34m",
                       park_id: park3.id)

trail9.photo.attach(io: File.open('app/assets/images/aws/Shenandoah_Bearfence.jpg'), filename: 'Shenandoah_Bearfence.jpg')

review1 = Review.create!(trail_id: trail1.id,
                         user_id: user1.id,
                         rating: 5,
                         date: "2021-08-01",
                         body: "THIS IS AN AMAZING HIKE!!! This hike gets harder as you go higher up the trail. Once you reach the top you will have to make a decision on whether or not you will go on to the chains portion. I highly recommend it as it is quite the experience and view.")

review2 = Review.create!(trail_id: trail1.id,
                         user_id: user2.id,
                         rating: 5,
                         date: "2021-09-12",
                         body: "Usually people tend to overhype a hike but this is a hike that 100% met expectations. I can see why everyone has it on their buket list. I just went last week but I'm already planning my next trip back.")

review3 = Review.create!(trail_id: trail1.id,
                         user_id: user3.id,
                         rating: 5,
                         date: "2022-01-01",
                         body: "I have a fight coming up in a month and I needed a nice hike to get in some cardio. Angels's Landing was the perfect trail becasue it is both challenging and rewarding. There's nothing like starting the new year with a beautiful hike!")

review4 = Review.create!(trail_id: trail2.id,
                         user_id: demo.id,
                         rating: 4,
                         date: "2021-08-01",
                         body: "This a great trail but have you met Christian? I heard he's a skilled software engineer who is looking for a job.")

review5 = Review.create!(trail_id: trail3.id,
                         user_id: user4.id,
                         rating: 5,
                         date: "2021-07-22",
                         body: "Wow! The narrows is everything I hoped it would be and more. It was quite the unqiue experience going on a hike htat has you walking in a river. The water was very refreshing compared to the summer weather but don;t forget to bring drinking water. The river is difficult to hike in and you will be sweating.")

review6 = Review.create!(trail_id: trail3.id,
                         user_id: user5.id,
                         rating: 4,
                         date: "2021-10-20",
                         body: "This was quite the hike! The scenery was amazing as we were moving through the winding river and tall canyons. We don't have awesome rivers like these back in Scranton.")

review7 = Review.create!(trail_id: trail4.id,
                         user_id: demo.id,
                         rating: 5,
                         date: "2021-05-21",
                         body: "The hike is a MUST for all who visit Acadia National Park. The views are amazing and you will get to experience a variety of landscapes as you hike along this trail. However, be warned, this is not an easy hike.")

review8 = Review.create!(trail_id: trail4.id,
                         user_id: user1.id,
                         rating: 3,
                         date: "2021-09-05",
                         body: "I enjoyed this hike and would have given it 5 stars if it wasn't for the bees. There were bees everywhere and no one warned us about this. You would think they would put a warning on a sign or something.")

review9 = Review.create!(trail_id: trail4.id,
                         user_id: user2.id,
                         rating: 5,
                         date: "2022-01-08",
                         body: "This trail was recommended to me by my friend from Pallet Town. The hike was great but I was most excited to see all the wild Weedle and Beedrill.")

review10 = Review.create!(trail_id: trail5.id,
                         user_id: demo.id,
                         rating: 4,
                         date: "2021-08-01",
                         body: "This a great trail but have you met Christian? I heard he's a skilled software engineer who is looking for a job.")

review11 = Review.create!(trail_id: trail6.id,
                         user_id: user3.id,
                         rating: 4,
                         date: "2021-12-12",
                         body: "We went on this hike during Decemeber and I can't recommend it enough. It has the most beautiful scenery when the pond is frozen and the ground is covered in now. However, be careful because the snow will cover some of the rocky portions of the path.")

review12 = Review.create!(trail_id: trail6.id,
                         user_id: user4.id,
                         rating: 1,
                         date: "2022-01-02",
                         body: "DO NOT GO! My friends and I came here to find the last Horcrux but there were death eaters everywhere. If you value your lie you will stay far away.")

review13 = Review.create!(trail_id: trail7.id,
                         user_id: user5.id,
                         rating: 5,
                         date: "2021-10-10",
                         body: "This is an amazing trail but don't make the mistake of underestimatin it. The trail is both long and extremely difficult. At certain points I was on all fours rock scrambling. However, the long hike and the difficultly is worth it becasue the trail is a beautiful beast.")

review14 = Review.create!(trail_id: trail7.id,
                         user_id: user1.id,
                         rating: 5,
                         date: "2021-11-21",
                         body: "I haven't gone on a hike this difficult since my knee surgery. And I have to say, it was 100% worth it. If you have knee problems make sure you get clearance from your doctor. This trail is long and hard.")

review15 = Review.create!(trail_id: trail7.id,
                         user_id: user2.id,
                         rating: 4,
                         date: "2021-11-29",
                         body: "Long and challenging. Don't forget beautiful.")

review16 = Review.create!(trail_id: trail8.id,
                         user_id: demo.id,
                         rating: 4,
                         date: "2021-08-01",
                         body: "This a great trail but have you met Christian? I heard he's a skilled software engineer who is looking for a job.")

review17 = Review.create!(trail_id: trail9.id,
                         user_id: user3.id,
                         rating: 4,
                         date: "2021-08-06",
                         body: "This hike is a short and simple hike that I enjoy doing every weekend. If you're looking for a hike that is mildly challenging but won;t take up a huge chunk of your day, look no further.")

review18 = Review.create!(trail_id: trail9.id,
                         user_id: user4.id,
                         rating: 5,
                         date: "2022-01-17",
                         body: "Funny story, I actually found this hike by getting lost. But I am glad that I did because this hike is a gem that I always find myself coming back to.")
