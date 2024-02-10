import { AUDIO_FILE_TYPE } from '../../constant/audio';
import { IAudio } from '../zustand/usePlayerStore';
import { find, insertMany } from './audio';

const lessons = [
  {
    id: 1,
    title: 'Listening Practice Through Dictation Level 1',
    units: [
      {
        topic: 'Nature and the Environment',
        title: 'A Picnic by the River',
        content:
          'W: This is a good spot. Let’s stop and have our picnic next to the river.\n\nM: Good idea. Walking always makes me hungry. I’m ready for lunch.\n\nW: We can sit here on the grass. Oh no! Someone forgot to throw these empty paper bags away. There is litter everywhere!\n\nM: Why do people always leave litter around? It’s not a nice thing to do. It spoils other people’s picnics.\n\nW: I think they are lazy. Or maybe they just don’t care. Look, there are some empty cans and glass bottles under that tree, too.\n\nM: People should clean up before they leave, and not leave litter lying around.\n\nW: That’s right. Well, after our picnic, let’s pick up all the litter we can and take it out of here.\n\nM: OK! And next week, let’s come back with friends and pick up some more.\n\nW: Good idea!',
        url: '"---require(\'./lessons/lesson1/audio1.mp3\')---"',
        id: 6982730651462,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-01.mp3?_=1',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Let’s Recycle!',
        content:
          'M: Hi, Jane! Have you heard about the new laws to help people recycle?\n\nW: I heard about them on the news last night. I don’t think I like them.\n\nM: The government wants to keep the environment clean by recycling paper, metal, and glass instead of throwing these things away.\n\nW: But who wants to pay an extra 50 cents each time you buy a cup of coffee? That’s a lot of money!\n\nM: 50 cents? It’s only five cents extra for a paper cup.\n\nW: I thought it was 50 cents!\n\nM: No, it’s only five cents. Don’t worry. And you can get your money back when you return the cup.\n\nW: That’s fair. Well, maybe the government is right, after all. I’ll return all the paper coffee cups I use from now on.\n\nM: Good! We all need to recycle. It helps to keep the environment clean.',
        url: '"---require(\'./lessons/lesson1/audio2.mp3\')---"',
        id: 9168327637127,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-02.mp3?_=2',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Growing Roses',
        content:
          'M: Excuse me, ma’am. I have a problem with my rose bush. It used to produce a lot of pink roses. But now it doesn’t produce any flowers at all.\n\nW: I see. That does seem like a problem. Do the leaves on the plant look healthy?\n\nM: Not really. The leaves used to be very green. Now, most of them have turned brown.\n\nW: Well, I think your rose bush needs some fertilizer.\n\nM: OK. What sort of fertilizer do you think I should use?\n\nW: This liquid fertilizer is very good. It will help make your rose leaves green again. Then the\n\nplant should produce roses quite soon. The fertilizer costs about ten dollars.\n\nM: How long will it take for my rose bush to recover?\n\nW: About two weeks, I think.\n\nM: Great. I’ll take it. Thank you so much for your help.\n\nW: You’re welcome!',
        url: '"---require(\'./lessons/lesson1/audio3.mp3\')---"',
        id: 4302259463500,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-03.mp3?_=3',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Bird Watching',
        content:
          'B : I want to go bird watching tomorrow. Do you know a good area for birds?\n\nG : There is a quiet park near here. There are always many beautiful birds there.\n\nB : Will I be able to see different types of birds in this area?\n\nG : Yes, I think so. If you use binoculars, you can see the birds, even if they are far away.\n\nB : Great! I have a book about all the different types of birds.\n\nG : It seems as if you really like bird watching.\n\nB : Yes, I do! Would you like to come with me tomorrow?\n\nG : No, thank you. I think bird watching is boring.\n\nB : That’s not true! Birds are very interesting. Some birds have colorful feathers. Some birds sing beautiful songs. Some birds make special nests to lay eggs in.\n\nG : Really? Maybe I will go bird watching one day after all!',
        url: '"---require(\'./lessons/lesson1/audio4.mp3\')---"',
        id: 6538207215209,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-04.mp3?_=4',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Trees in the Forest',
        content:
          'B : There are many forests in North America. There are many trees in these forests. Some of these trees are more than two hundred feet tall. Some are over five hundred years old.\n\nSeveral kinds of trees grow in these forests. Fir, cedar, and pine are three. These trees grow in different areas. Some grow in forests. Some grow on the mountains. People who lived in this place long ago used these trees to make things out of wood.\n\nMany of these trees are now in special areas. These areas are called forest reserves or national parks.\n\nSome parks charge a small entrance fee. Visitors must pay the fee to enter the parks. Then they can walk among the beautiful old trees. They must take care not to damage the trees. We should all take care of forests.',
        url: '"---require(\'./lessons/lesson1/audio5.mp3\')---"',
        id: 3795439329632,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-05.mp3?_=5',
      },
      {
        topic: 'Science and Technology',
        title: 'An Easy Way to Shop',
        content:
          'G : Hey, Steve. Look at my new MP3 player!\n\nB : Wow! It looks cool! Where did you buy it?\n\nG : I bought it online at an electronics website.\n\nB : I’m not very good at using a computer. Is it hard to buy things online?\n\nG : It’s really easy. All you do is go to the website, and choose the item you want to look at. There are so many items to choose from on the website! After you choose what you want to buy, you click on the “check out” button.\n\nB : That does seem easy!\n\nG : Yes, it is. It only takes about a week for your item to come. Of course, if you are in a hurry, you can pay more to get it sent faster.\n\nB : Do you pay for the item when it comes?\n\nG : No, you have to pay for it online with a credit card. ',
        url: '"---require(\'./lessons/lesson1/audio6.mp3\')---"',
        id: 6226225335727,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-06.mp3?_=1',
      },
      {
        topic: 'Science and Technology',
        title: 'Cell Phone Messages',
        content:
          'W: I need to check my messages.\n\nM: How are you going to do that? We are in the middle of the freeway!\n\nW: I’m going to use my cell phone. Haven’t you ever done that?\n\nM: No. I just use my cell phone to talk to other people.\n\nW: Now you can also use a cell phone to send and receive short text messages. It’s very useful.\n\nM: How do you send a message that way?\n\nW: I just use the keys on the phone to type a short message. Then I press the “send” button. It’s cheaper than making a phone call.\n\nM: That’s a great idea! You can save both time and money that way.\n\nW: Right. All my friends usually send me text messages now.\n\nM: Thanks for telling me about this. I’ll have to try it!\n\nW: You’re welcome. I think you’ll find it useful. ',
        url: '"---require(\'./lessons/lesson1/audio7.mp3\')---"',
        id: 5005874981799,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-07.mp3?_=2',
      },
      {
        topic: 'Science and Technology',
        title: 'Bubbles in Boiling Water',
        content:
          'G : Where do the bubbles come from when you boil water?\n\nWater is a liquid. When it is heated, it moves around faster and faster. When it starts to boil, the liquid turns into a gas. This gas is called water vapor. This gas is lighter than the water around it. It rises to the top. Then it disappears into the air.\n\nAs the water gets hotter and hotter, it starts turning into gas very quickly. A lot of bubbles form at the same time. All these bubbles try to escape at once. The bubbles push the water out of the way and “jump” out. This is what we call “boiling water.”\n\nMore and more water turns into gas. More of it disappears into the air. After a while, every drop of the water will be gone. Try it and see! ',
        url: '"---require(\'./lessons/lesson1/audio8.mp3\')---"',
        id: 6624695216238,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-08.mp3?_=3',
      },
      {
        topic: 'Science and Technology',
        title: 'The Blue Sky',
        content:
          'B : Joe asked me something about science just now. But I didn’t know the answer.\n\nG : I’m good at science. Ask me.\n\nB : OK. Why is the sky blue?\n\nG : I’ll explain it in a simple way. Light comes through the air from the sun in waves.\n\nB : The light is in many colors, right?\n\nG : Right. Blue light waves are smaller than air molecules. They sometimes get absorbed by these molecules.\n\nB : OK. What happens then?\n\nG : Then the blue light waves scatter in many directions. Your eyes see this blue light from above you, after it leaves the air molecules.\n\nB : So that is what makes the sky blue! What happens to the other colors?\n\nG : They reflect off the things that they hit. Your shirt is red because our eyes see the red light reflected from it.\n\nB : Now I understand why the sky is blue! ',
        url: '"---require(\'./lessons/lesson1/audio9.mp3\')---"',
        id: 7627191177314,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-09.mp3?_=4',
      },
      {
        topic: 'Science and Technology',
        title: 'A New Camera',
        content:
          'M: I just bought a digital camera!\n\nW: What is wrong with your old camera?\n\nM: Nothing. I bought this one because I want to store my pictures on my computer.\n\nW: I see.\n\nM: I can also delete pictures that are not very good. I don’t have to print them.\n\nW: I like to print all my photos. That’s why I like the old cameras.\n\nM: Oh, you can print digital photos, too. Many shops will print them for you.\n\nW: Really?\n\nM: Yes. You can even buy a good printer and do it from home.\n\nW: That seems easy! How do you store these digital pictures?\n\nM: You can store the pictures on your computer. But you might run out of space. I save all the pictures I like on compact discs. You can store more than seven hundred photos on one CD!\n\nW: Great! Maybe I should get a digital camera, too. ',
        url: '"---require(\'./lessons/lesson1/audio10.mp3\')---"',
        id: 5596374873909,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-10.mp3?_=5',
      },
      {
        topic: 'Art and Culture',
        title: 'Gold',
        content:
          'M: Gold has been a part of many cultures for hundreds of years. People made coins and jewelry with gold.\n\nGold is a soft metal. It is easy to shape into sheets, long wires, or rings. People sometimes mix gold with other metals. This makes the gold harder. Then it can be made into beautiful jewelry. Why do we value gold so much? It has a special color. No other metal is a bright yellow.\n\nWe also value gold because it is rare. A rare thing is hard to find. Even after hundreds of\n\nyears, gold is still a precious metal now. It is still valued for its beauty. It is still rare.\n\nToday, banks store gold in the form of bars. Its value is more than $600 per ounce. Gold is more useful now than ever before.',
        url: '"---require(\'./lessons/lesson1/audio11.mp3\')---"',
        id: 8975221745536,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-11.mp3?_=1',
      },
      {
        topic: 'Art and Culture',
        title: 'The Summer Music Festival',
        content:
          'W: Have you heard about the music festival next summer? I read that it is going to have about 20 different bands playing in it.\n\nM: I think I did hear someone talking about it. Are you planning on going?\n\nW: I’ll go if I can get tickets. I heard that people are going to line up overnight to get tickets. I might line up overnight, too.\n\nM: I don’t think I want to line up all night long!\n\nW: Well, I’m going to do it. I think it is going to be a great music festival that I won’t want to miss.\n\nM: Maybe. Do you know how much the tickets are going to cost?\n\nW: I’m not sure, but I think each ticket will be about $75.\n\nM: That’s a lot of money! I don’t think I want to spend that much on a ticket. Good luck, anyway! ',
        url: '"---require(\'./lessons/lesson1/audio12.mp3\')---"',
        id: 4389901394599,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-12.mp3?_=2',
      },
      {
        topic: 'Art and Culture',
        title: 'The School Play',
        content:
          'B : Are you going to the school play on Saturday night?\n\nG : The school play? I didn’t know there was going to be a play on Saturday night.\n\nB : Yes, I heard about it in English class yesterday. I think it will be really good.\n\nG : Who told you about it?\n\nB : Ms. Martin, our English teacher, told us all about it. This is the drama club’s first play of the year.\n\nG : What is the play about? I hope it’s nothing boring.\n\nB : Can you guess what it is?\n\nG : Oh, come on, tell me please!\n\nB : It’s The Sound of Music.\n\nG : Really? I watched The Sound of Music on TV last month! It’s very good! Are you sure?\n\nB : Of course I’m sure, that’s what Ms. Martin said. Would you like to watch the play with me on Saturday night?\n\nG : That would be great! Let’s go early so we get good seats! ',
        url: '"---require(\'./lessons/lesson1/audio13.mp3\')---"',
        id: 8340036946811,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-13.mp3?_=3',
      },
      {
        topic: 'Art and Culture',
        title: 'Ballet Class',
        content:
          'W: Hi Cindy, where are you going?\n\nG : Good afternoon, Mrs. White, I’m going to ballet class.\n\nW: Ballet class? I didn’t know you were studying ballet. How long have you been studying ballet?\n\nG : Today is my first day, and I don’t want to go. My mom and dad want me to learn ballet. I’m not sure I want to learn how to dance.\n\nW: I used to learn ballet too, when I was your age. Now I teach ballet in a dance school.\n\nG : Oh, I didn’t know that! Where do you teach your classes?\n\nW: Down the street at Easy Steps Dance Academy. Ballet is fun to learn, and it’s a very graceful dance. You’ll need to learn the steps and practice a lot of course, but I think you’ll enjoy it.\n\nG : I hope so!\n\nW: Well, go and have some fun dancing! ',
        url: '"---require(\'./lessons/lesson1/audio14.mp3\')---"',
        id: 8394610953408,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-14.mp3?_=4',
      },
      {
        topic: 'Art and Culture',
        title: 'Monet’s Garden',
        content:
          'W: Claude Monet was a great artist. He was the first of a group of artists called the\n\nImpressionists. This group of artists thought about how things in the world made them feel. ',
        url: '"---require(\'./lessons/lesson1/audio15.mp3\')---"',
        id: 1132958805165,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-15.mp3?_=5',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'A Haunted House',
        content:
          'G : Oh no, it’s raining! I wanted to go to the beach today.\n\nB : Well, I’m visiting a haunted house this afternoon. You can come with me if you like.\n\nG : A haunted house? What is it like?\n\nB : It’s really dark, with lots of old furniture and pictures on the walls. It’s called a haunted house because it’s full of ghosts!\n\nG : You’re joking, right? I don’t believe in ghosts! Where is the haunted house?\n\nB : The house is in the old forest.\n\nG : Oh! Are you really sure you want to go?\n\nB : What’s wrong? I thought you didn’t believe in ghosts!\n\nG : Well, I don’t really believe in ghosts, but . . .\n\nB : That’s OK, I don’t believe in ghosts, either! I was only joking. The old house isn’t really haunted; it’s just a very old, empty house.\n\nG : Whew, I’m glad to hear that! Sure, I’ll come with you! ',
        url: '"---require(\'./lessons/lesson1/audio16.mp3\')---"',
        id: 4923166893809,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-16.mp3?_=1',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'A Big Screen TV',
        content:
          'M: I’m thinking about buying a big screen TV.\n\nW: Wow! I’ve seen those in the store. They cost a lot of money. Can you afford to buy one?\n\nM: They do cost a lot of money. But I really enjoy watching TV. I think it’s much more fun to watch TV shows on a big screen.\n\nW: I’ve never watched TV on a big screen. Do you think the quality of the picture is good?\n\nM: Yes, the quality is great. When you watch soccer games, you feel like you are right there on the field!\n\nW: When you buy the TV, can I come over to your house? Then, I can enjoy watching TV on the big screen with you!\n\nM: I have to save some money to buy the TV first. It will be a few months before I can afford to buy it! ',
        url: '"---require(\'./lessons/lesson1/audio17.mp3\')---"',
        id: 9950474293479,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-17.mp3?_=2',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'He’s Famous!',
        content:
          'B : Are you going to the new Tim Cross movie tonight?\n\nG : I don’t know. It looks kind of boring.\n\nB : Really? I think it looks quite interesting. Besides, Tim Cross is a famous actor.\n\nG : He may be famous, but I don’t think he’s a very good actor. He always acts in the same sort of movie. He never does anything different.\n\nB : Well, at least you think he’s good looking, right?\n\nG : No, not really. He always looks so sleepy.\n\nB : But most girls think he’s handsome. Maybe that’s why he is so famous.\n\nG : None of my friends think he is good looking at all. I used to like him a few years ago, but now I think he’s not handsome at all.\n\nB : Hey! I just got a haircut to try to look more like him!\n\nG : Well, that explains why I don’t like your new haircut! ',
        url: '"---require(\'./lessons/lesson1/audio18.mp3\')---"',
        id: 9387551507335,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-18.mp3?_=3',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'A Housewarming Party',
        content:
          'W: Hi, Steve! Thanks for coming to my housewarming party.\n\nM: Hello, Sue! Thanks for inviting me to see your lovely new home. It’s beautiful!\n\nW: Thank you. I’m glad you like it.\n\nM: Did you decorate your house all by yourself?\n\nW: Yes, I did. I traveled around Europe last year. I got some beautiful furniture for my house there.\n\nM: Do you plan to go on a new trip this summer?\n\nW: Yes, I am planning to visit China.\n\nM: That’s great! How long will you be there?\n\nW: I will be there for a month.\n\nM: You can find some beautiful things in China for your new house. You should go shopping while you are there.\n\nW: Of course! It will be fun to go shopping there. By the way, please help yourself to the refreshments.\n\nM: Thanks. The food looks delicious! ',
        url: '"---require(\'./lessons/lesson1/audio19.mp3\')---"',
        id: 7859693031072,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-19.mp3?_=4',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Making Music',
        content:
          'M: Do you like to listen to music? Music is made up of sound. People all over the world like music. People have liked it for hundreds of years.\n\nPeople who write music are called composers. Most of the time, a composer does not sing or play his own music. He writes it all down in the form of notes. Those who know how to read music can understand these notes. This is how people can sing the song or play it.\n\nLots of people like to play music. Music can be played on instruments. There are many types of musical instruments. Some of these are the piano, the violin, and the drum.\n\nPeople can make music as a group. A choir is a group of people who sing. An orchestra is a group of people who play musical instruments. ',
        url: '"---require(\'./lessons/lesson1/audio20.mp3\')---"',
        id: 1512546214396,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-20.mp3?_=5',
      },
      {
        topic: 'School and Family',
        title: 'Where Is Your Homework?',
        content:
          'G : Did you finish your homework for English class?\n\nB : Homework? There wasn’t any homework.\n\nG : We had to finish reading a book and then write a 200-word essay on it.\n\nB : I don’t think Ms. Jones gave us any homework. I always write what I have to do in my notebook. Did she really tell us to write an essay?\n\nG : Yes. Look, here’s my essay. See?\n\nB : Oh no! What am I going to do? We’ve only got 10 minutes before class starts.\n\nG : I don’t know. Maybe Ms. Jones will let you hand it in tomorrow.\n\nB : Hey, let me copy your essay. I’ll change a few words. Ms. Jones will never know.\n\nG : No, I’m sorry. That’s not the right thing to do.\n\nB : Oh, come on! I thought you were my friend.\n\nG : I am your friend. That’s why I’m not letting you copy my work! ',
        url: '"---require(\'./lessons/lesson1/audio21.mp3\')---"',
        id: 5661031938542,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-21.mp3?_=1',
      },
      {
        topic: 'School and Family',
        title: 'After School Activities',
        content:
          'B : Will you play any sports this school year?\n\nG : I want to play hockey. But I’m not sure if I will have enough time.\n\nB : I’m on the school soccer team. I’m also going to take up swimming.\n\nG : You’re going to be on the soccer team and swim, too?\n\nB : Yeah.\n\nG : That seems like a lot. You will be very busy! Do you think you will have any free time?\n\nB : I will play soccer with my school team during the week. I will go swimming during the weekend.\n\nG : When will you have time to do your homework? And when will you study?\n\nB : I do my homework after school every day. I study every weekend. My mother won’t let me play sports until I have done all my work.\n\nG : Well, I hope you find enough time for both schoolwork and sports. Good luck! ',
        url: '"---require(\'./lessons/lesson1/audio22.mp3\')---"',
        id: 5845900677960,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-22.mp3?_=2',
      },
      {
        topic: 'School and Family',
        title: 'Arts and Crafts Class',
        content:
          'G : Hi, Mom, I’m back from arts and crafts class. Look at what I’m wearing.\n\nW: Well, you’re wearing a blue T-shirt and jeans.\n\nG : Sure, but what else am I wearing?\n\nW: Oh, those earrings are very pretty! Is that what you’re learning to make this week in arts and crafts class?\n\nG : Yes, we’re learning to make jewelry from beads this week. The beads come in different colors and shapes. First, we decide what sort of jewelry we want to make. Then, we choose the beads we want, and string them on transparent plastic wire.\n\nW: That sounds like a lot of fun!\n\nG : Yeah! Tom made a bead necklace for his sister, and I made some earrings. Guess what, Mom? I made a pair of earrings for you, too!\n\nW: Oh, these are very pretty! Thank you very much.\n\nG : Next week, I’m going to make a necklace. ',
        url: '"---require(\'./lessons/lesson1/audio23.mp3\')---"',
        id: 6563186198765,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-23.mp3?_=3',
      },
      {
        topic: 'School and Family',
        title: 'Grandfather’s Birthday',
        content:
          'B : Hi, Mom! Guess what? We got our English test back today. I got the highest score in my class!\n\nW: Oh, Billy, I’m glad you did so well! You worked hard for that test.\n\nB : Thanks, Mom. I’m hungry. What’s for dinner?\n\nW: We’re going to your aunt’s place for dinner tonight. It’s your grandfather’s birthday today, remember?\n\nB : Oh no, I forgot! I haven’t got a birthday gift for Grandpa!\n\nW: Don’t worry. I bought a gift for him yesterday from the three of us. Anyway, your English test score is a good gift for your grandfather. The whole family will be at the party tonight. All your aunts, uncles, and cousins are coming.\n\nB : I haven’t seen the whole family in a long time.\n\nW: Well, you’ll see them tonight. Now, hurry up and get ready.\n\nB : OK. When are we leaving?\n\nW: When your father gets home from work. ',
        url: '"---require(\'./lessons/lesson1/audio24.mp3\')---"',
        id: 3911076696253,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-24.mp3?_=4',
      },
      {
        topic: 'School and Family',
        title: 'The Lesson',
        content:
          'W: There was once a man who lived with his two sons. The two sons were always fighting with each other. One day, the man decided to teach his sons a lesson.\n\nThe man gave his younger son two large sticks. He told the boy to break them. The boy tried hard, but he could not break the sticks. The older son also could not break the sticks.\n\nAt last, the man gave only one stick to each son. He said, “Break them.” Each son broke his stick easily.\n\nThe man said, “You are like these sticks. If you work together, no one can break you. But if you fight with each other all the time, one day, someone will break both of you.”\n\nAfter that lesson, the sons stopped fighting. They started to work together. ',
        url: '"---require(\'./lessons/lesson1/audio25.mp3\')---"',
        id: 1207813575661,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-25.mp3?_=5',
      },
      {
        topic: 'People and Work',
        title: 'A Problem at the Office',
        content:
          'M: I had a big problem at the office today! W: What happened?\n\nM: I could not use my computer all day!\n\nW: Was it because of a virus?\n\nM: Yes. I opened a file that had a virus.\n\nW: Oh no! You must be careful when you open files in your email. A virus can make your whole computer crash.\n\nM: It was an accident! I didn’t know the file had a virus. I’ll be more careful next time.\n\nW: What did you do next?\n\nM: I asked a computer repairman to come to the office. He worked all day to repair my computer. But the real problem is that I may have lost some of my work.\n\nW: Don’t worry. Your work is probably still on your computer. I can help you get it back. Next time, make sure you have back-up files. Just in case it happens again! ',
        url: '"---require(\'./lessons/lesson1/audio26.mp3\')---"',
        id: 1422900700165,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-26.mp3?_=1',
      },
      {
        topic: 'People and Work',
        title: 'My Future Job',
        content:
          'G : What do you want to be when you grow up, Mark?\n\nB : I want to be a teacher. I think I would like to help children learn.\n\nG : Well, you know, teachers work very hard, and they are not paid much money.\n\nB : I don’t care about money. Teaching is an important job.\n\nG : What subject do you want to teach?\n\nB : I want to teach mathematics, like Ms. Kim. She makes learning fun. I didn’t know that I would like math so much until I joined her class. Now, mathematics is my favorite subject.\n\nG : If you want to teach math, you’ll have to work hard and learn it well.\n\nB : No problem! I got an A on the mathematics examination last week. With good teachers like Ms. Kim, learning is easy.\n\nG : I want to be a teacher, too. But I want to teach English, not math! ',
        url: '"---require(\'./lessons/lesson1/audio27.mp3\')---"',
        id: 1944642328288,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-27.mp3?_=2',
      },
      {
        topic: 'People and Work',
        title: 'Shopping',
        content:
          'W: We are having a summer sale. Everything is 50% off the normal price.\n\nM: Really? Everything?\n\nW: Yes. Everything is on sale, including sunglasses, hats, and bags. All the summer clothes are on sale, too.\n\nM: I do need some new sunglasses. I lost mine when I went to the beach this summer. Oh, these are really nice. What is the price of these? There is no price tag on them.\n\nW: Well, sir, there’s no price tag on those sunglasses because they are mine!\n\nM: Really? I would like to get a pair of sunglasses just like these. Where did you get them?\n\nW: Actually, I got them for $15 at Super Glasses.\n\nM: There is a Super Glasses store in this mall, isn’t there?\n\nW: Yes, but let me show you the sunglasses we have on sale.\n\nM: No, thanks. I think I’ll just go to Super Glasses! ',
        url: '"---require(\'./lessons/lesson1/audio28.mp3\')---"',
        id: 2538758445135,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-28.mp3?_=3',
      },
      {
        topic: 'People and Work',
        title: 'A Part-time Job',
        content:
          'B : I want to find a part-time job. Do you have any ideas about where I should look for work?\n\nW: Have you looked in the newspaper? There are lots of job advertisements in the newspaper.\n\nB : Yes, I have. But there were no jobs I was interested in.\n\nW: Did you search on the Internet? Many companies put job advertisements on the Internet.\n\nB : No, I haven’t looked on the Internet. I don’t know what I should search for.\n\nW: There are many websites that have job postings that you could look at. You could also search for the type of job you are interested in.\n\nB : OK. Thanks for telling me what I need to do. I’ll start my Internet search right now.\n\nW: I have a list of some websites. You could start looking at those first. That might save you some time.\n\nB : That would be very useful. Thanks! ',
        url: '"---require(\'./lessons/lesson1/audio29.mp3\')---"',
        id: 9615861328643,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-29.mp3?_=4',
      },
      {
        topic: 'People and Work',
        title: 'Teamwork',
        content:
          'G : When people work together as a team, they can achieve a lot. You can easily get things done when you share the work.\n\nWe practice teamwork in my family. Both my parents have jobs. My father is a doctor. My mother is a teacher. Both of them work long hours all week. My brother is a student at college. I am a student in school. We all have very busy lives. So, when it comes to household chores, we all work together to get them done.\n\nEach of us has different chores. My parents take turns to cook. My father takes out the trash. My mother does the laundry. My brother washes the dishes. I sweep the floor. We share the chores and work together. Everything gets done fast.\n\nPeople should practice working as a team. Teamwork works! ',
        url: '"---require(\'./lessons/lesson1/audio30.mp3\')---"',
        id: 5023973959999,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-30.mp3?_=5',
      },
      {
        topic: 'Sports and Health',
        title: 'The Marathon',
        content:
          'W: Did you watch the Boston marathon?\n\nM: Yes, I went to Boston to see it.\n\nW: You were in Boston for the marathon?\n\nM: That’s right. My friend is a runner, so I went there to watch her run. We traveled to Boston together.\n\nW: You are so lucky! Which part of the marathon did you see?\n\nM: I watched the entire race, from start to finish.\n\nW: I don’t know how the runners can finish the whole race! It’s so long and difficult! I could never do something like that.\n\nM: I tried to run a marathon once. It was really difficult. I just can’t run like my friend can.\n\nW: Yes, running a marathon is not an easy thing to do. By the way, how did your friend do in the race?\n\nM: She did quite well! She was not the fastest runner, but she was in the top 50. ',
        url: '"---require(\'./lessons/lesson1/audio31.mp3\')---"',
        id: 8648973519299,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-31.mp3?_=1',
      },
      {
        topic: 'Sports and Health',
        title: 'Racquetball',
        content:
          'B : Racquetball is a popular sport. It was first played in the US. This game started just a little more than 50 years ago. That makes it quite a new sport.\n\nOther racket sports like tennis and squash have been played for a long time. Racquetball rules are a mix of rules from both handball and squash. A short racket is used to play this game.\n\nThis game became popular almost at once when it first came out. More and more people wanted to play it. Clubs began to build racquetball courts. They built these courts for players of this new sport.\n\nPeople of all ages can play this game. But most players today are young people. Most of\n\nthem are between the ages of 12 and 34. Racquetball is now a famous sport. It is played all over the world. ',
        url: '"---require(\'./lessons/lesson1/audio32.mp3\')---"',
        id: 3019635291461,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-32.mp3?_=2',
      },
      {
        topic: 'Sports and Health',
        title: 'Summer Sports',
        content:
          'B : Hi, Alice. What have you been doing? You look tired.\n\nG : I stayed up late last night to watch the Olympics. We won a gold medal for men’s\n\nbasketball. We also won the silver medal for women’s tennis.\n\nB : That’s great! What about gymnastics?\n\nG : The men’s team didn’t do so well. But the women’s team won the silver medal.\n\nB : I haven’t had much time to watch, but I saw the opening ceremony.\n\nG : What have you been doing this summer?\n\nB : I’ve been playing baseball and taking swimming lessons.\n\nG : I like to watch baseball. Maybe I can come and watch your team play some time. When do you usually play?\n\nB : We have a game this weekend. Why don’t you come and watch us play in the park?\n\nG : Sure! Just let me know what time the game starts. See you later.\n\nB : Bye! ',
        url: '"---require(\'./lessons/lesson1/audio33.mp3\')---"',
        id: 9265124567067,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-33.mp3?_=3',
      },
      {
        topic: 'Sports and Health',
        title: 'Inline Skating',
        content:
          'B : Oh! My legs are so sore!\n\nG : Really? What did you do during the weekend?\n\nB : I went inline skating with my friends at the park.\n\nG : Did you have fun?\n\nB : Yes, I did. But it was also my first time, so it was really difficult. I was scared that I would fall down. After a short time, my muscles were really tired.\n\nG : Next time will be easier. You just need more practice.\n\nB : What about you? What did you do during the weekend?\n\nG : Actually, I also went inline skating. I go every weekend with my father. We usually skate about 20 kilometers each time.\n\nB : Wow! How can you skate so far? Your muscles must be really strong.\n\nG : I’ve been skating for three years now. You could skate that far, too. You just need to build up your muscles. Let’s go skating together next weekend.\n\nB : OK! ',
        url: '"---require(\'./lessons/lesson1/audio34.mp3\')---"',
        id: 1495953963993,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-34.mp3?_=4',
      },
      {
        topic: 'Sports and Health',
        title: 'The Olympics',
        content:
          'W: The Olympic Games are a famous world sports event. These games are held once in four years. There are summer games and winter games.\n\nPeople come from countries all over the world to compete in the games. These games started a long time ago in Greece. In those days, only men took part in them. There were only a few sports events.\n\nNow, women take part in the Olympic Games, too. There are team sports, like basketball. There are martial arts, like judo. More and more types of sports are in the games each time they are held.\n\nIt is very hard to win a medal at these games. Only world champions take part in the Olympics. Those who compete must work hard for years. Their bodies must be very fit. They must be the best to win medals in these games. ',
        url: '"---require(\'./lessons/lesson1/audio35.mp3\')---"',
        id: 5511834481192,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-35.mp3?_=5',
      },
      {
        topic: 'Travel and Transport',
        title: 'A Bicycle Trip',
        content:
          'M: I’m planning to go on a bicycle trip around Europe.\n\nW: Why do you want to go on a bicycle trip?\n\nM: It is an environmentally friendly way to travel.\n\nW: What do you have to do in order to go on a bicycle trip?\n\nM: Before the trip, I’ll need to ride my bicycle a lot. That will make me fit and strong. I also need to get some equipment.\n\nW: What kind of equipment will you need?\n\nM: I need road maps of the countries I am going to visit. I also need strong bags to carry clothes and food. I need to carry all these things on my bicycle.\n\nW: Are you traveling with another person?\n\nM: Yes, I am going with a friend of mine. He likes bicycle trips.\n\nW: I wish I could go on a bicycle trip, too! Well, don’t get too many flat tires! ',
        url: '"---require(\'./lessons/lesson1/audio36.mp3\')---"',
        id: 6483301245445,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-36.mp3?_=1',
      },
      {
        topic: 'Travel and Transport',
        title: 'Driving Down South',
        content:
          'B : Isn’t it great that there aren’t any classes on Monday? We have a three-day weekend!\n\nG : That’s right! Do you have any special plans?\n\nB : My family is taking a trip to Las Cruces. I’m really looking forward to it. Have you ever been there?\n\nG : No, but I’ve heard about it. Is it nice?\n\nB : Yes, there are so many things to see. The city is famous for its nuts.\n\nG : What kind of nuts?\n\nB : Pecans. There are many pecan trees growing in and around the city.\n\nG : I like pecans. How far away is Las Cruces from here?\n\nB : It only takes about four hours by car if you use the freeway and drive directly south.\n\nG : That certainly makes for an easy trip. When are you leaving?\n\nB : We’re going on Saturday morning. We’ll be back on Monday evening.\n\nG : Have a nice time! Bring me some pecans! ',
        url: '"---require(\'./lessons/lesson1/audio37.mp3\')---"',
        id: 4649279055332,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-37.mp3?_=2',
      },
      {
        topic: 'Travel and Transport',
        title: 'The Travel Agent',
        content:
          'W: I want to go on a trip to China.\n\nM: How long do you want to stay?\n\nW: Four or five days.\n\nM: We have a very good package tour that is for four days and three nights.\n\nW: OK. What can you tell me about it?\n\nM: Well, you’ll fly directly to Beijing. Your tour guide will meet you at the airport and take you to your hotel. Over the four days, you will do a lot of sightseeing. You will see many famous landmarks, like the Summer Palace, the Forbidden City, and the Great Wall of China.\n\nW: That sounds great! What sort of transport will we use to get from one place to another?\n\nM: You will take a bus with your tour group.\n\nW: OK. Can I book this package tour now? There will be five of us going on this trip.\n\nM: Sure! ',
        url: '"---require(\'./lessons/lesson1/audio38.mp3\')---"',
        id: 2510762704915,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-38.mp3?_=3',
      },
      {
        topic: 'Travel and Transport',
        title: 'Taking the Train',
        content:
          'M: You’re so lucky, Marian. You’re leaving for Hawaii in five hours! I never travel because I hate flying in airplanes. I don’t like buses, either.\n\nW: That doesn’t matter, Dean. There are other ways to get around. You should take the train somewhere.\n\nM: That’s true. It’s been a long time since I last traveled. I’ve always wanted to take a long train trip.\n\nW: What’s stopping you? Go to the travel agent now and ask about train trips!\n\nM: What do you think the fares are like?\n\nW: I’m not sure what train fares are like now. I think it depends on your destination. That’s a question you’ll have to ask a travel agent.\n\nM: Can you suggest a good person to talk to?\n\nW: My travel agent is always very helpful. Here is his phone number.\n\nM: Thanks! I’ll call him right now. Where’s the phone? ',
        url: '"---require(\'./lessons/lesson1/audio39.mp3\')---"',
        id: 5732883512613,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-39.mp3?_=4',
      },
      {
        topic: 'Travel and Transport',
        title: 'Go on a Cruise!',
        content:
          'M: Are you sick of long road trips in a car? Do you find long trips in an airplane boring? Do you want to travel in a special way? You should take a cruise to all the places you would like to see!\n\nGo by cruise ship to the northeast part of the US! Go late in the year. Then, you can enjoy the colors of the autumn leaves on the trees. It is a beautiful sight.\n\nDo you like to look at man-made wonders? Go on a cruise to the Panama Canal! Do you want to see icebergs? Do you want to look at seals and whales? Go on a cruise to Alaska!\n\nWherever you may choose to go, a cruise is a great way to travel. Book a trip on a cruise ship today! You will love it! ',
        url: '"---require(\'./lessons/lesson1/audio40.mp3\')---"',
        id: 2160986071597,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-1-40.mp3?_=5',
      },
    ],
  },
  {
    id: 2,
    title: 'Listening Practice Through Dictation Level 2',
    units: [
      {
        topic: 'Nature and the Environment',
        title: 'Antarctica',
        content:
          'B : Antarctica is another name for the South Pole. It is also a continent. A long time ago, the South Pole was close to the equator. That was 500 million years ago. It was once joined to Australia. Then, all the land on Earth started to move. Antarctica moved away from Australia and went south.\n\nDinosaur bones were once found at the South Pole. Do you know why? Dinosaurs lived there millions of years ago. This was before it moved away from the equator.\n\nAbout 98% of this continent is frozen. The rest is made up of rock. The South Pole has 87% of the world’s ice. But did you know that it gets very little snow? Only about two inches of snow falls each year.\n\nHow many people live on your continent? No one lives in the South Pole. Only animals, like penguins, live there. Scientists and tourists visit there, but they don’t stay long. Do you want to visit Antarctica? It is the coldest, driest place on Earth! ',
        url: '"---require(\'./lessons/lesson2/audio1.mp3\')---"',
        id: 903968246433,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-01.mp3?_=1',
      },
      {
        topic: 'Nature and the Environment',
        title: 'A Hiking Trip',
        content:
          'M: Hi, Anne! Did you sign up for the trip on Saturday?\n\nW: What trip is that? I didn’t know there was a trip on Saturday.\n\nM: The hiking club is going to Bear Mountain. The bus drops us off at the bottom, and we’re going to hike until we get to a cabin halfway up the mountain.\n\nW: That sounds really great! Where can I sign up?\n\nM: Go and see Jennifer. She’ll help you sign up.\n\nW: What activity will we do when we get to the cabin on the mountain?\n\nM: Well, it takes seven hours to hike to the cabin, so it will be late by the time we arrive. After we unpack, we’ll start a campfire. Then we can sing, eat, and tell stories around the fire. The following day we’ll leave at dawn and hike to the top of the mountain. After we take pictures, we’ll hike back down. If we have time, we might go swimming in the lake on the mountain!\n\nW: Those sound like really fun activities, and I can’t wait to go! ',
        url: '"---require(\'./lessons/lesson2/audio2.mp3\')---"',
        id: 3960017706919,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-02.mp3?_=2',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Save the Turtles',
        content:
          'M: Have you heard about the plan to save turtles in Mexico?\n\nW: No. What is the story?\n\nM: Turtles are in danger of becoming extinct around the world. Every year, thousands of turtles lay eggs on the beach. After the turtles lay their eggs in the sand, people come along and take them.\n\nW: I suppose the people like eating turtle eggs.\n\nM: Exactly. Turtles are beginning to stay away from certain places, now. There are fewer and fewer of them left. There is a new project in Mexico to save these eggs. Then turtles will not become extinct. I think it’s a very good project.\n\nW: Is there anything we can do to help?\n\nM: I’m going to call the Environmental Protection hotline. They might have some information about the project to help save turtles in Mexico.\n\nW: They might even have a brochure. Let’s find the website on my computer. Oh, here it is. The address is www.enviro.com. There’s plenty of information here.\n\nM: Great! Let’s see what we can do to help save turtles in Mexico. ',
        url: '"---require(\'./lessons/lesson2/audio3.mp3\')---"',
        id: 6509111454990,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-03.mp3?_=3',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Hiking in Iran',
        content:
          'G : Most people think that the Middle East is only a desert. This is far from true. Last year, I went hiking in Iran. Iran has many mountains. You can find trees that lose their leaves in winter.\n\n',
        url: '"---require(\'./lessons/lesson2/audio4.mp3\')---"',
        id: 7948071527910,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-04.mp3?_=4',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Jane Goodall',
        content:
          'G : Jane Goodall went to Africa when she was 26 years old. She went there to research chimpanzees. At that time, no other women scientists worked there alone.\n\nAt first, Jane studied the chimps from far away. The chimps were afraid of her. They ran away if she came close to them. After some time, the chimps saw that she was not going to hurt them. They let her walk near them.\n\nSoon, she was living among them. She wanted to learn more and more about them. Jane did a lot of research on chimps. She discovered many new things about them. She learned that each chimp has its own personality. She saw that they have feelings.\n\nJane discovered that chimps have very close families. Mothers and fathers take good care of baby chimps. An adult female chimp will sometimes adopt an orphan.\n\nIn 1977, Jane started an institute to help protect animals. She wanted to help animals all around the world. Today, this institute runs programs in over 70 countries. ',
        url: '"---require(\'./lessons/lesson2/audio5.mp3\')---"',
        id: 3099655797484,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-05.mp3?_=5',
      },
      {
        topic: 'Science and Technology',
        title: 'Flying Cars',
        content:
          'M: Listen to this! This newspaper article says that some scientists are working on a new kind of airplane. People can use these “flying cars” for short trips.\n\nW: How interesting!\n\nM: The article says the first flying car might be ready within the next few years.\n\nW: That’s quite soon! How would this flying car work? Can anybody use one, or is it only for people who know how to fly airplanes?\n\nM: You don’t need to be an airplane pilot to use a flying car. The article says there would be a computer inside the car that would know where you want to go. The driver does not need to control the car unless something goes wrong.\n\nW: Does the article say how much a flying car would cost? It will probably cost too much money! We would not be able to afford one.\n\n',
        url: '"---require(\'./lessons/lesson2/audio6.mp3\')---"',
        id: 3080009236691,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-06.mp3?_=1',
      },
      {
        topic: 'Science and Technology',
        title: 'The Perfect Gift',
        content:
          'W: Hello, and welcome to Robuck’s. How may I help you?\n\nM: I would like to buy my wife a home appliance for her birthday.\n\nW: What sort of appliance are you looking for, sir?\n\nM: I think a dishwasher might be the perfect gift because it will help with the housework.\n\nW: Oh yes, dishwashers are very useful. This one here is our most popular model.\n\nM: How does it work?\n\nW: It’s very simple. First, collect your dirty dishes and scrape off the leftover food into the garbage can. Then, rinse the dishes in the sink. Put glasses, cups, and cutlery on the top rack. Plates, bowls, and pots go face down on the bottom rack. Then, fill this compartment with detergent and close the door. Next, choose the wash cycle, and finally, press the start button. You’ll have sparkling clean dishes in 45 minutes!\n\nM: That sounds easy to use. I think my wife will really like it. How much does it cost?\n\nW: You’re lucky, sir! It’s on sale this week for $400.\n\nM: Great, I’ll take it! ',
        url: '"---require(\'./lessons/lesson2/audio7.mp3\')---"',
        id: 7696261324932,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-07.mp3?_=2',
      },
      {
        topic: 'Science and Technology',
        title: 'Acupuncture',
        content:
          'B : Acupuncture began in China thousands of years ago. It is a special way to treat sick people.\n\nThere are many acupuncture spots on the human body. Small metal needles are put into spots on the body. Each spot is connected to a special body part or system. There are many spots for each part.\n\nAn expert puts the needles into these spots in a person’s body. These spots connect to the body system that has a problem. The needles do not go deep. People say that the needles do not hurt.\n\nWe are not sure why acupuncture works. But studies have shown that it works very well. No one can explain why. Doctors think that it helps the nerves in the body. Some doctors use acupuncture to treat people who cannot take medicine. ',
        url: '"---require(\'./lessons/lesson2/audio8.mp3\')---"',
        id: 447521404107,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-08.mp3?_=3',
      },
      {
        topic: 'Science and Technology',
        title: 'Albert Einstein',
        content:
          'B : Albert Einstein is famous around the world. He is famous for his work in science. Many people think that he was the greatest scientist of the 20th century.\n\nEinstein was born in Germany in 1879. His interest in science began when he was very\n\nyoung. Someone gave him a compass in 1884. Young Einstein was interested in how it worked. He wanted to learn science. He wanted to become a scientist.\n\nEinstein tried to enter a top Swiss university. At first, he met with failure. He did not get a place. But Einstein did not give up easily. He applied again to the same university in the next year. This time he was successful. Einstein was a good student. He graduated from this famous university in 1896.\n\nAs a scientist, Einstein did important work in the field of physics. His work was very good. He received the Nobel Prize for physics in 1921. In 1933, he went to live in the United States with his wife. ',
        url: '"---require(\'./lessons/lesson2/audio9.mp3\')---"',
        id: 4863851439941,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-09.mp3?_=4',
      },
      {
        topic: 'Science and Technology',
        title: 'The Telescope',
        content:
          'G : Come and look at the telescope I got for my birthday.\n\nB : That’s neat!\n\nG : Yeah, now we can look at the moon. Did you know that the moon is the Earth’s only natural satellite?\n\nB : No, I didn’t know that. I thought the moon was a planet.\n\nG : Well, a planet moves around the sun, but a satellite moves around a planet.\n\nB : Oh, I see. Can you see other planets with your telescope?\n\nG : Sure, I can see two planets close to Earth really well.\n\nB : Which planet is closest to Earth? ',
        url: '"---require(\'./lessons/lesson2/audio10.mp3\')---"',
        id: 1378817484397,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-10.mp3?_=5',
      },
      {
        topic: 'Art and Culture',
        title: 'The Mona Lisa',
        content:
          'G : What are you looking at, Billy?\n\nB : This is a copy of my favorite painting. It’s the Mona Lisa by Leonardo da Vinci.\n\nG : Why is that your favorite painting?\n\nB : Well, there are a few things that make the Mona Lisa great. First, she has no eyebrows. Second, she has a really beautiful smile. Most of all, I like the soft colors of the painting. Have you seen the Mona Lisa before? It is a very famous painting!\n\nG : Of course! I’ve seen the painting a few times before. But I never noticed that her eyebrows are missing. I wonder why she has no eyebrows. Do you know why?\n\nB : At the time da Vinci painted it, it was fashionable for young Italian girls to shave off their eyebrows. Every girl wanted to be fashionable.\n\nG : Wow! That’s really interesting! In what year was the Mona Lisa painted?\n\nB : I think it was painted sometime between 1503 and 1505.\n\nG : I wonder what a modern Mona Lisa would look like.\n\nB : She might have purple hair! ',
        url: '"---require(\'./lessons/lesson2/audio11.mp3\')---"',
        id: 3323159333905,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-11.mp3?_=1',
      },
      {
        topic: 'Art and Culture',
        title: 'Bang Yi',
        content:
          'G : Once upon a time, there was a poor, kind man named Bang Yi. He had a rich but greedy brother. One day, Bang Yi asked his brother to give him some grain seeds to grow. His greedy brother gave Bang Yi some poisoned seeds.\n\nOnly one plant grew from the poisoned seeds, but Bang Yi was very happy. He took good care of the plant. Then, one afternoon, a bird came and stole the plant. Bang Yi chased the bird into the forest. In the forest, he saw two monsters using a magic stick to turn rocks into food. Bang Yi hid behind a big rock and watched the monsters. The monsters ate a lot of food. Soon, they became very sleepy. When the monsters had fallen asleep, Bang Yi took their magic stick. He became very rich!\n\nBang Yi’s greedy brother went to the forest to find a magic stick for himself. The angry monsters saw him. They chased him deep into the forest. The greedy brother was never seen again. ',
        url: '"---require(\'./lessons/lesson2/audio12.mp3\')---"',
        id: 6897894385428,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-12.mp3?_=2',
      },
      {
        topic: 'Art and Culture',
        title: 'Friendship Day',
        content:
          'W: Friends are an important part of our lives. They help us in many ways. Do you tell your friends that you are glad they are your friends? Everyone should tell their friends that they are special.\n\nDid you know that there is now a special day just for friends? This day is called National Friendship Day. The first Sunday in August was chosen to be National Friendship Day in 1935. This holiday is not as big as Christmas or New Year’s Day. However, it is still a special day.\n\nPeople are usually too busy to visit their friends often. But this day is different. On this day, people take time to tell their friends how much they care. They write cards or send emails to their friends. They may also call their friends, no matter how busy they are. People hug their friends or spend time with them.\n\nThere are many ways to show you care. You need not wait for a special day. Call your friends right now! ',
        url: '"---require(\'./lessons/lesson2/audio13.mp3\')---"',
        id: 2979556673213,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-13.mp3?_=3',
      },
      {
        topic: 'Art and Culture',
        title: 'An Outdoor Exhibit',
        content:
          'M: Do you like photographs?\n\nW: What kind of photos?\n\nM: Photos of plants and animals, for example. Or mountains and oceans.\n\nW: The sort of photographs a nature magazine would publish.\n\nM: That’s right.\n\nW: Of course! I love nature photos. They are very beautiful.\n\nM: Some of them are very colorful.\n\nW: Yes. Most nature photos are so interesting. Sometimes, I buy nature magazines just for the photos.\n\nM: Me, too. I like taking nature photos with my camera. But they are not very good.\n\nW: My photos are not good, either. Famous nature magazines only publish very good photos.\n\nM: That’s true. People must be very talented to get their photos published.\n\nW: Yeah. Why are we suddenly talking about photographs? Is there an exhibit somewhere?\n\nM: How did you guess? There is an outdoor exhibit going on right now.\n\nW: Really?\n\nM: Yes. Nature photographs from all over the world are on display.\n\nW: That sounds great! I would love to see it.\n\nM: Me, too. Would you like to go with me?\n\nW: Sure. How about Sunday morning?\n\nM: OK! It will be fun to see all those photos! ',
        url: '"---require(\'./lessons/lesson2/audio14.mp3\')---"',
        id: 1190964570559,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-14.mp3?_=4',
      },
      {
        topic: 'Art and Culture',
        title: 'People Are Different!',
        content:
          'W: There are more than six billion human beings in the world. Each one is different from all the others. No two people look exactly alike. People from one country may look the same in general. But they are not totally alike.\n\nMost people in Vietnam have straight black hair and black eyes. But they all look different. People in America have straight hair, curly hair, or wavy hair. Their hair may be black, brown, yellow, or red. Some people have brown or gray eyes. Some have blue or green eyes. Even people in the same family look different from each other! ',
        url: '"---require(\'./lessons/lesson2/audio15.mp3\')---"',
        id: 6617093788238,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-15.mp3?_=5',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Karaoke',
        content:
          'M: It’s nice to see you, Karen. How have you been?\n\nW: I’ve been very well, thank you. How are you, Dan?\n\nM: I’m fine, thanks. I went to the movies Saturday night. I wanted to invite you, but you weren’t home.\n\nW: That’s right, I went karaoke singing with some friends on Saturday night.\n\nM: Really? I’ve never sung karaoke. What’s it like?\n\nW: I had never gone karaoke singing before either, but I had a great time. My friends were experienced karaoke singers, so they showed me what to do.\n\nM: Did you have to sing in front of a lot of strangers?\n\nW: No, the place we went to rented out small private rooms. Nobody else could hear us. They even gave us free sodas!\n\nM: Cool! What kind of music did they have?\n\nW: They had hundreds of different songs to choose from. They had both new songs and old songs. They had songs in English and songs in several other languages, too. It was really fun!\n\nM: I think I’ll go karaoke singing next weekend! ',
        url: '"---require(\'./lessons/lesson2/audio16.mp3\')---"',
        id: 4996461732544,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-16.mp3?_=1',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Watching TV',
        content:
          'W: Did you watch the latest episode of that new reality show last night?\n\nM: There are so many of those reality shows these days. Which one are you talking about?\n\nW: It’s called “Good Fences,” and it’s all about neighbors. This reality show is the only one I like, because you’re right, the others are just silly.\n\nM: I never watch reality shows at all. I prefer to watch shows that teach me about something, like science and nature programs, and travel shows.\n\nW: Oh, I like travel shows, too. My favorite travel show is the one with that chef from England. He travels, cooks, and eats all the time!\n\nM: I like that one, too. He really makes me laugh. He has a good sense of humor.\n\nW: Let’s watch it together this week. It’s on Thursday at eight o’clock, right?\n\nM: That’s right, but where shall we watch it?\n\nW: Well, I have a big-screen TV and a comfortable sofa.\n\nM: OK, we’ll watch it at your place then, and I’ll bring some snacks. See you then! \n\n ',
        url: '"---require(\'./lessons/lesson2/audio17.mp3\')---"',
        id: 5075917924343,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-17.mp3?_=2',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Have Some Fun!',
        content:
          'W: OK, great, we’ll meet you in an hour. Bye.\n\nM: Who was that on the phone, Jane?\n\nW: That was Amy. She wants to meet us in front of her apartment building in an hour.\n\nM: Why are we meeting her there?\n\nW: Because her apartment is close to the bus stop. We’re going to go downtown and watch a movie, so hurry up and get ready.\n\nM: Oh, I honestly don’t think I should watch a movie tonight. I’m studying for an important test on Tuesday, so I really don’t have time to have fun!\n\nW: You have been studying for several days, Joe. You don’t need to study anymore. You need to have some fun because you’re too tired to study, anyway.\n\nM: I don’t know, maybe you’re right. Is it just Amy and us going?\n\nW: Lily is coming along, too.\n\nM: Really? I need time to take a shower and get dressed!\n\nW: Don’t worry, you have time.\n\nM: It will be fun to see Lily and fun to watch a movie together.\n\nW: I told you so! ',
        url: '"---require(\'./lessons/lesson2/audio18.mp3\')---"',
        id: 8246336860692,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-18.mp3?_=3',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Tickets to the Game',
        content:
          'W: You won’t believe this, but I have some great news! I’ve got two tickets to the baseball game next Saturday.\n\nM: Did I hear you correctly? You have two tickets to the baseball game? How did you get those? I thought it was impossible to get tickets because they were all sold out last month!\n\nW: It was easy, actually. My colleague and her husband have to go to London that week, so they’ll miss the game. They offered me their tickets, and of course I was happy to accept.\n\nM: You’re so lucky! Who are you going to take with you?\n\nW: I was thinking that maybe you would like to go. Otherwise, I might take my brother instead.\n\nM: Don’t do that, I would love to watch the game with you!\n\nW: I was just joking. I know you really want to go. Where shall we meet on Saturday?\n\nM: Well, the game starts at nine o’clock in the morning, right?\n\nW: Yes, shall we meet here at 8:30 a.m. on Saturday?\n\nM: Good idea. I can’t wait! ',
        url: '"---require(\'./lessons/lesson2/audio19.mp3\')---"',
        id: 2071523681914,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-19.mp3?_=4',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Wonder Woman',
        content:
          'B : Comic book heroes have been popular for many years. One hero has the strength of one hundred men. This hero also has the speed of lightning. This hero cannot be killed. If you think this hero is Superman, you are wrong! This hero is Wonder Woman!\n\nA man called William Marston created Wonder Woman in 1941. He was a graduate of Harvard University. He used a false name on his comics. He did not want his colleagues to know that he wrote comics. The false name was Charles Moulton.\n\nMr. Marston wanted to make a strong female hero for little girls. Of course, he hoped that little boys would like Wonder Woman, too. Wonder Woman was not very popular at first. Then, World War II began in 1941.\n\nWonder Woman became a role model for children around the world. She was both strong and beautiful. She always tried to do what was right. Today, she is still one of the most popular heroes of all time. ',
        url: '"---require(\'./lessons/lesson2/audio20.mp3\')---"',
        id: 193130366195,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-20.mp3?_=5',
      },
      {
        topic: 'School and Family',
        title: 'Blood Types',
        content:
          'G : Thanks for meeting with me today, Professor. I don’t understand last week’s lecture on blood types. Could you please explain it to me?\n\nM: No problem, Angela. First, let’s see what you do understand. Can you tell me about blood types?\n\nG : There are four types of blood: A, B, AB, and O.\n\nM: Good! How is your blood type determined?\n\nG : You get your blood type from both your parents. Your blood type is a combination of genes from your father and your mother.\n\nM: That’s right.\n\nG : Before the lecture, I always thought that all blood was the same. Why can’t two different blood types mix?\n\nM: In some ways, every person’s blood is the same. But it is very dangerous to mix two different blood types. Your blood cells may begin to stick together. If you are given the wrong type of blood in a hospital, you could die.\n\nG : I see. So, that’s why blood types must be matched in the hospital. And this must be done before blood is given to anyone.\n\nM: Exactly! ',
        url: '"---require(\'./lessons/lesson2/audio21.mp3\')---"',
        id: 279030099462,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-21.mp3?_=1',
      },
      {
        topic: 'School and Family',
        title: 'The Car Ride',
        content:
          'B : Mom, Danielle’s on my side of the car again. Tell her to move over!\n\nW: Listen, both of you, I’ve had enough of your nonsense. Sit still, be quiet, and enjoy the scenery!\n\nG : Mom, is Toronto still far away?\n\nW: It’s going to take a long time to get there, so read your book.\n\nG : I don’t like to read in the car because it gives me a headache. Can we put a CD in?\n\nW: I suppose so, but it had better not be rap music. That music is awful, and I can’t believe you children actually listen to it.\n\nB : Oh, please, can we play some rap music? You might like it, Mom.\n\nW: Well, only if you promise that there is no bad language in it.\n\nB : There isn’t any bad language, I promise!\n\nW: All right, I’ll play the CD, but it will be at the volume I choose. ',
        url: '"---require(\'./lessons/lesson2/audio22.mp3\')---"',
        id: 2247591304200,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-22.mp3?_=2',
      },
      {
        topic: 'School and Family',
        title: 'The Report',
        content:
          'B : I finished my report on the French Revolution last night.\n\nG : How did you finish it so fast? I’m still trying to find books about it.\n\nB : There was something about the French Revolution on TV last week. I wrote down the names of all the people who were on the show.\n\nG : What did you do next?\n\nB : I went to the library and looked for their books. It was very easy, especially because I already understood what they wanted to say.\n\nG : I guess I could have done that, but I missed the TV show. Why did Ms. Dessard make us write about French history, anyway? She’s a French language teacher, not a history teacher.\n\nB : Ms. Dessard said that if we want to understand the language, we should understand the culture. I don’t know if I speak better French, but I know more about French history now. If the French Revolution had never happened, French would be a very different language.\n\nG : You’re right. I’m going to talk to Ms. Dessard now. I’ll see you later. ',
        url: '"---require(\'./lessons/lesson2/audio23.mp3\')---"',
        id: 7871573653841,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-23.mp3?_=3',
      },
      {
        topic: 'School and Family',
        title: 'Home Schools',
        content:
          'M: There are many kinds of schools for many kinds of students. One kind of school is the home school. Home schools are exactly that-schools at home.\n\nParents choose to home school their children for many reasons. Some people feel that public schools are too dangerous. Some people think that the level of education is too low. Some parents do not approve of the subjects their children learn in public schools. If parents choose to home school their children, they must be ready to teach them\n\nwell.\n\nThere are many benefits to home schooling. Home schools are very small. There are just one or two students. The student’s mother or father is the teacher. Another benefit is that students can study interesting things.\n\nSome people think that home schooling is not good for students. They believe public schools teach children discipline. They feel that public schools give a sense of community. In the end, parents must decide if home schooling is the right choice for their children. ',
        url: '"---require(\'./lessons/lesson2/audio24.mp3\')---"',
        id: 6123499908401,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-24.mp3?_=4',
      },
      {
        topic: 'School and Family',
        title: 'Big Brother',
        content:
          'G : So, how does it feel to have a new baby brother in the house?\n\nB : It’s really exciting, but not as easy as I thought it would be, because the baby cries constantly. I love my baby brother, but I don’t like all that noise!\n\nG : I know! When my baby sister was born, she cried and slept all the time. I had to help change diapers and feed her.\n\nB : I hope I never have to change a diaper! My mom and dad do a good job of that. I learned how to heat the bottle to the right temperature, though. Having a new baby around is hard work.\n\nG : What do you like most about your new brother?\n\nB : He’s really cute, and everyone says he looks like me, but with darker hair.\n\nG : Smaller too, of course!\n\nB : He laughs when I tickle his little feet. When he grows up a bit, I’ll teach him how to ride a bicycle, and we can also play games together! I’m going to be the best big brother in the world! ',
        url: '"---require(\'./lessons/lesson2/audio25.mp3\')---"',
        id: 4039213427074,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-25.mp3?_=5',
      },
      {
        topic: 'People and Work',
        title: 'The New Boss',
        content:
          'M: You know, Kim, I think our new boss doesn’t like me. I don’t understand why.\n\nW: That’s not true, Trevor! Why, just this morning I heard her say you’re a very good employee. She said you work very hard every day.\n\nM: That’s news to me. I wish she would say it to me, but she just criticizes everything I do.\n\nW: I think that you’re being too sensitive. ',
        url: '"---require(\'./lessons/lesson2/audio26.mp3\')---"',
        id: 1359159407384,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-26.mp3?_=1',
      },
      {
        topic: 'People and Work',
        title: 'The Principal',
        content:
          'W: How long have you been a school principal, Mr. Shin?\n\nM: I have been a school principal for 18 years.\n\nW: What made you get involved in education?\n\nM: When I was 12 years old, I read an article about how the human brain works. I studied very hard. I tried to use my brain well. Soon, I began to get interested in education.\n\nW: I see!\n\nM: After college, I became a teacher. I was given the position of principal 12 years later.\n\nW: Do you ever wish that you had done something else?\n\nM: When I first started as a principal, I missed being a teacher. I liked spending time with children and helping them learn and grow. However, I knew that I could do a lot of good as a principal.\n\nW: You have certainly done a lot of good, Mr. Shin! You started a special program to send all the students in your school to college!\n\nM: I have been planning to do that for some time. I’m glad the program is so successful. ',
        url: '"---require(\'./lessons/lesson2/audio27.mp3\')---"',
        id: 9384558918788,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-27.mp3?_=2',
      },
      {
        topic: 'People and Work',
        title: 'Bill Gates',
        content:
          'M: Look at this article I am reading. It says here that Microsoft made over $36 billion in 2004.\n\nW: Wow!\n\nM: I wish I was Bill Gates, the owner of Microsoft!\n\nW: Is it just because of the money? ',
        url: '"---require(\'./lessons/lesson2/audio28.mp3\')---"',
        id: 9838119420205,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-28.mp3?_=3',
      },
      {
        topic: 'People and Work',
        title: 'Mark Twain',
        content:
          'G : Here is a story that Mark Twain, the famous author of Tom Sawyer and The Adventures of Huckleberry Finn, told one afternoon.\n\nYears ago, I was on a train leaving New York. There were too many people, and the sleeper train was full. I asked the young man at the ticket office if I could have a room in the sleeper section of the train. He answered rudely, “No!”\n\nI left feeling quite angry. As I was getting on the train, I saw a man watching me. He watched me for a few minutes. Then he spoke to the conductor in a whisper. Immediately the conductor came over to me.\n\n“Can I help you?” he asked. “Do you want a place in the sleeper section?”\n\n“Yes, give me anything.”\n\n“We have two beds and chairs in a private section.”\n\nThe conductor made sure I was comfortable.\n\nThen he said, “I’m so proud to have you on this train, sir.”\n\n“Oh? Who am I?” I asked.\n\n“General McClellan.” ',
        url: '"---require(\'./lessons/lesson2/audio29.mp3\')---"',
        id: 9720943610354,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-29.mp3?_=4',
      },
      {
        topic: 'People and Work',
        title: 'A Soccer Star',
        content:
          'B : Soccer is a very popular team sport worldwide. Many people love to watch it. Hong Myung-bo is a famous soccer player. He started playing soccer in 1990. He played for the Pohang Steelers for six years. Then he played for the Los Angeles Galaxy. He was the first Korean to play for a major league soccer team in the United States. Now, he is a coach for the South Korean soccer team.\n\nHong is famous because he played soccer well. He played in more than 125 international games. He also played in four World Cups. He played in the World Cup in 1990, 1994, 1998, and 2002.\n\nHong won two soccer awards in 2002. His team won the award for the Most Entertaining Team in the World Cup. People thought it was fun to watch Hong’s team play soccer! Hong also won the Adidas Bronze Ball Award. This award was for his outstanding performance in the game. Even though Hong did not play in the final game, he played well. ',
        url: '"---require(\'./lessons/lesson2/audio30.mp3\')---"',
        id: 9518643077785,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-30.mp3?_=5',
      },
      {
        topic: 'Sports and Health',
        title: 'Keeping Fit',
        content:
          'W: We all need regular exercise to keep fit. But if we study all day, we don’t have time to run, swim, lift weights, or play basketball. What can we do to stay in shape?\n\nOne thing we could do is walk more often. Walking is good exercise. Instead of going to school by car or bus, we could walk. During recess, we could go outside and stroll around before we go back to class. Instead of taking the elevator in buildings all the time, we could use the stairs.\n\nAnother important thing is to take breaks from studying. If we sit at our desks or in front of a computer for a long time, we should stand up and stretch our arms and legs once each hour. If we stand for a long time, we should sit down and stretch our backs. ',
        url: '"---require(\'./lessons/lesson2/audio31.mp3\')---"',
        id: 7779999004438,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-31.mp3?_=1',
      },
      {
        topic: 'Sports and Health',
        title: 'Stop Yawning!',
        content:
          'W: Stop yawning, Jason!\n\nB : I’m sorry, Ms. Terry. I can’t help it!\n\nW: You can! You yawn because your lungs need more oxygen. When you need more oxygen, you open your mouth wide and take in a lot of air.\n\nB : What can I do to stop yawning?\n\nW: You should go outside into the fresh air and breathe deeply. Then you won’t need to yawn anymore. Your lungs will have lots of oxygen.\n\nB : We just came in from recess, so why am I yawning?\n\nW: Are you tired? Being tired also makes you yawn. This is because your body needs rest. Oxygen helps your body rest. Sleeping rests your body and makes you take long, deep breaths.\n\nB : Then, why do I yawn when I am bored, Ms. Terry?\n\nW: Well, Jason, when you are bored, you are probably not breathing deeply enough. The best way to stop yawning from boredom is to do something interesting. If you can’t do that, try taking deep breaths. This will not stop the boredom, but it will help you stop yawning. ',
        url: '"---require(\'./lessons/lesson2/audio32.mp3\')---"',
        id: 2689297979308,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-32.mp3?_=2',
      },
      {
        topic: 'Sports and Health',
        title: 'The Gym',
        content:
          'W: Did you hear that a new gym opened on one of the streets nearby?\n\nM: That’s great news! I’ve gained some weight, and I’d like to lose it through exercise.\n\nW: I need to lose weight, too, and I’ve always wanted to take yoga classes.\n\nM: Do you know if the new gym offers yoga classes?\n\nW: I’m not sure. I’m planning to go there on Friday evening to look around. Do you want to join me?\n\nM: Let me check my schedule for this week. I’m too busy on Friday, so can we go on Saturday afternoon instead?\n\nW: Sure. We can see what the new gym has to offer, and get some exercise, too. It’s fun to work out in a gym with other people. We might even meet new people with similar hobbies! ',
        url: '"---require(\'./lessons/lesson2/audio33.mp3\')---"',
        id: 9512688537083,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-33.mp3?_=3',
      },
      {
        topic: 'Sports and Health',
        title: 'A Healthy Lifestyle',
        content:
          'W: This burger is delicious! Do you want some?\n\nM: No, thank you. I’m working out at the gym these days. I want to be healthy, so I’ve also started eating good, fresh food.\n\nW: You’re exercising? That’s fantastic! When did you start thinking about your weight and staying in shape?\n\nM: Last month I had a check-up. My doctor told me that I should be leading a much healthier lifestyle now that I’m getting older. Now, I try to eat small, regular meals instead of one or two big meals a day.\n\nW: I see. What types of food do you usually eat now?\n\nM: I eat lots of fruit and vegetables. I try to limit carbohydrates like bread, rice, and pasta. I also try not to eat sugary foods.\n\nW: Oh dear! I love sugary foods, especially cakes.\n\nM: Well, try to eat food that is good for you. You need to take care of yourself.\n\nW: You’re right. I should start thinking about a healthier lifestyle. But first, I’m going to finish my burger! ',
        url: '"---require(\'./lessons/lesson2/audio34.mp3\')---"',
        id: 6331535213051,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-34.mp3?_=4',
      },
      {
        topic: 'Sports and Health',
        title: 'A Balanced Meal',
        content:
          'W: I have lost seven pounds in one week! Skipping breakfast really works.\n\nM: I don’t think that’s a good idea.\n\nW: Why not?\n\nM: People who skip breakfast eat more at the next meal. Eating breakfast is very important. Breakfast gives you energy for the day.\n\nW: Well, I eat one big meal a day at dinnertime.\n\nM: Having one meal a day is not good. You should have several small meals a day. You’ll have more energy that way.\n\nW: Maybe you’re right. I have been feeling really tired lately.\n\nM: What do you usually eat?\n\nW: I only eat salads now. ',
        url: '"---require(\'./lessons/lesson2/audio35.mp3\')---"',
        id: 2331421401528,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-35.mp3?_=5',
      },
      {
        topic: 'Travel and Transport',
        title: 'Across Canada',
        content:
          'W: I’m so excited! I just got back from the travel agency.\n\nM: Travel agency? Where are you going?\n\nW: I’m planning to go to Canada on vacation.\n\nM: Canada! How exciting! How long are you going for?\n\nW: I’m going for a month. I want to see as much as I can!\n\nM: You are so lucky! What places are you going to visit?\n\nW: First, I’ll spend a few days in Vancouver. Then I’ll take a train through the Rocky Mountains.\n\nM: Oh, you’re riding through the Rockies! That’s really exciting!\n\nW: Then I’ll fly to Toronto, and take a bus to Niagara Falls. Did you know that you can actually take a boat under that huge waterfall? It’s called Maid of the Mist.\n\nM: Wow! That’s an amazing thing to do! You’re so lucky!\n\nW: Well, I hope I don’t get seasick! I’ll finish my trip in Nova Scotia. I want to eat lobster for dinner every night. And I’d like to bike around some small fishing villages, too.\n\nM: Have a great time, and take lots of pictures! ',
        url: '"---require(\'./lessons/lesson2/audio36.mp3\')---"',
        id: 9872924271139,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-36.mp3?_=1',
      },
      {
        topic: 'Travel and Transport',
        title: 'A Trip to Europe',
        content:
          'G : Where are you going on vacation this year, Andre?\n\nB : I’m going to Europe with my parents. We’re going to take a tour of France, Italy, and Germany.\n\nG : Oh! That will be such fun! How long will you be gone?\n\nB : Three weeks. We’re going in the summer, so I won’t miss any school.\n\nG : What will you do there?\n\nB : We’re going to visit historical sites, like the Coliseum in Rome. We’ll also see famous museums, like the Louvre in Paris. And, of course, we’re going to the top of the Eiffel Tower.\n\nG : How will you travel from one country to another?\n\nB : There’s a famous train that goes all over Europe. It’s called the Eurorail.\n\nG : I wish I could go with you! My family is going to the seashore again, just like last year. I’d like to go somewhere I’ve never been.\n\nB : Don’t worry, Julie. I will take lots of pictures, and I’ll buy you a souvenir.\n\nG : Thank you! I’ll collect some seashells from the beach for you.\n\nB : Thanks! ',
        url: '"---require(\'./lessons/lesson2/audio37.mp3\')---"',
        id: 1915765541630,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-37.mp3?_=2',
      },
      {
        topic: 'Travel and Transport',
        title: 'New Mexico',
        content:
          'B : Hi, I haven’t seen you for two whole weeks! Where did you go on your vacation?\n\nG : I visited my cousin in New Mexico. I had a great time!\n\nB : Mexico? I thought you went to the US.\n\nG : I did. New Mexico is a state in the southwestern US. It’s between Texas and Arizona. Guess what? A lot of Americans don’t know that New Mexico is a state. The license plates on cars in New Mexico also say “USA.” This is so that people don’t get confused and think the driver is from Mexico.\n\nB : That’s funny! So, tell me what you did in New Mexico.\n\nG : My favorite part was visiting Carlsbad Caverns. There are 30 miles of caves! In one cave, we had to wear hats with lights on them so we could see in the dark. Sometimes we had to crawl through very narrow tunnels on our hands and knees.\n\nB : Weren’t you scared?\n\nG : No, it was a lot of fun! I’m going to visit my cousin again next year. You should come with me! ',
        url: '"---require(\'./lessons/lesson2/audio38.mp3\')---"',
        id: 7116560301575,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-38.mp3?_=3',
      },
      {
        topic: 'Travel and Transport',
        title: 'A Good Way to Travel',
        content:
          'M: Traveling is a good hobby. If you have very little money, backpacking is a good way to travel. Many students like to backpack. They can travel cheaply. They can travel to many places. These travelers carry their belongings in large backpacks. They are called backpackers.\n\nBackpackers take buses or trains to save money. They camp outdoors to sleep. If they stay in a city, they may go to a hostel. A hostel is like a hotel. Hotels are not cheap. Hostels are very cheap. Travelers often share rooms at hostels. There are only a few toilets and baths. People share them, too.\n\nHostels are a good place to meet other travelers. You can make friends. They can tell you about fun things to do in the area. Many hostels have kitchens. These kitchens have stoves. Some have toasters. You can buy your food from a store. Then, you can cook at the hostel. This is cheaper than eating out. Just remember to clean up when you are done! ',
        url: '"---require(\'./lessons/lesson2/audio39.mp3\')---"',
        id: 5127505817441,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-39.mp3?_=4',
      },
      {
        topic: 'Travel and Transport',
        title: 'A Train Announcement',
        content:
          'W: Welcome on board the TGV 740. We are now leaving Paris. We will arrive in Marseilles at 3:00 p.m.\n\nWe offer free beverages in each car. Please have as much coffee, tea, or soft drinks as you wish. There is a restaurant on the train. You may purchase a meal there during the trip. The restaurant is in car 11.\n\nWe will make two stops on this trip. We will pick up passengers in Provence and Dijon. Passengers changing trains can ask the attendant for a free timetable. This will help you with your onward trip.\n\nPlease note that smoking is only permitted in cars 15 and 23. Newspapers are given to all passengers. Mobile phones and the Internet may be used in cars 18 and 25. If you need assistance, please press the button near your seat to contact a cabin attendant.\n\nPlease sit back, relax, and enjoy the trip. We are pleased to have you on board. We look forward to serving you again in the future. ',
        url: '"---require(\'./lessons/lesson2/audio40.mp3\')---"',
        id: 6717874077095,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-2-40.mp3?_=5',
      },
    ],
  },
  {
    id: 3,
    title: 'Listening Practice Through Dictation Level 3',
    units: [
      {
        topic: 'Nature and the Environment',
        title: 'A Big Responsibility',
        content:
          'B : Mom, can I get a puppy?\n\nW: No, Billy. Taking care of a pet is a big responsibility.\n\nB : I promise to take good care of him, and you won’t have to remind me to do things for him.\n\nW: A dog isn’t a toy that you play with for awhile. He will be part of our life for the next 10 or 20 years. He is a living creature.\n\nB : I understand that, Mom. I promise to feed him every morning and take him for walks every afternoon.\n\nW: That’s part of the responsibility, but there’s more. He needs a license and has to go to the vet to get shots. A dog also needs companionship. You can’t go off with your friends and leave him locked up in the house all day.\n\nB : I understand, Mom. I have almost $100 in the bank so I can pay for his license and shots now.\n\nW: There are other expenses, too. Dog food is rather expensive.\n\nB : Well, I have my job mowing lawns and I’ll get a newspaper route.\n\nW: I think we should discuss this with your father when he gets home. This is a family decision.\n\nB : OK, Mom. Thanks! ',
        url: '"---require(\'./lessons/lesson3/audio1.mp3\')---"',
        id: 3277532822124,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-01.mp3?_=1',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Elephants Are Amazing',
        content:
          'M: Elephants are interesting. They are intelligent. They also have a great memory. You should always be kind to elephants. They remember everything. A woman from India told me a story. When she was a little girl, she knew of an evil elephant keeper. He often hit his elephant. He was very mean and cruel to the elephant. Then the evil keeper sold the elephant. The new keeper was a very kind man. Many years later, the evil keeper met the elephant again. The elephant remembered the evil man. He picked up a stone with his trunk and threw it at the evil man. The elephant still knew the man, even after so many years.\n\nElephants help each other, too. Elephants use a special sound. The sound is so low that people cannot hear it. This sound travels really far. ',
        url: '"---require(\'./lessons/lesson3/audio2.mp3\')---"',
        id: 3817121910035,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-02.mp3?_=2',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Ants, Ants, Everywhere!',
        content:
          'G : Hello, Mrs. Wilson. How are you?\n\nW: I’m worried, Brianna. Thousands of ants are all over my patio!\n\nG : That’s quite a problem.\n\nW: What’s worse is that my daughter’s birthday party is in a few days and I wanted to have it on the patio.\n\nG : Why don’t you call an exterminator?\n\nW: I would, but I don’t want all those hazardous chemicals around my children. It’s harmful and unhealthy. I also don’t want dangerous substances to seep into the garden.\n\nG : I usually don’t have problems with ants, and I don’t use any chemicals.\n\nW: What’s your secret?\n\nG : Well, ants are difficult to control, so I planted a lot of mint plants near my deck. I also use cinnamon and cayenne pepper. I just sprinkle them around the places I don’t want ants. Some people have tried it and said it worked. Others said that they needed to try something else.\n\nW: I think it’s worth a try. I would rather use cinnamon and mint around my patio than some hazardous chemicals. Besides, I don’t mind having the ants in the yard. I simply don’t want them coming to the birthday party. Would you mind helping me?\n\nG : It would be a pleasure. I have a lot of cinnamon at home and I can run to the store to get the plants for you.\n\nW: Thank you, Brianna. You’re such a thoughtful person. ',
        url: '"---require(\'./lessons/lesson3/audio3.mp3\')---"',
        id: 6987680327557,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-03.mp3?_=3',
      },
      {
        topic: 'Nature and the Environment',
        title: 'The Oil Spill',
        content:
          'G : My best friend Katy lives near a beautiful white sand beach. Her parents take us there every summer. The water is clean and refreshing. We have a lot of fun in the waves. Last year, there was an oil spill at Katy’s beach. We volunteered at the beach to clean up the oil and help the birds that were caught in the spill.\n\nWhen we arrived at the beach that day, the water was slick with oil and the white sand had turned black. It was an ugly sight. At first, the rescue workers would not let us on the beach. We had to watch from a distance. We watched as they put a huge float in the water, called a boom. This device kept the oil slick from spreading. Once they stopped the slick, we were allowed on the beach to help. Each of us was given a broom. We swept the oil into a pile. The workers took it away in big trucks. We all worked very hard that day to restore the beach.\n\nOnce the oil was removed, the birds that had been caught in the oil had to be helped. The workers showed us how to remove the oil from their wings. Then the birds could fly away to safety. We were very proud of ourselves that day. We helped save our beautiful beach and the birds who visit it. ',
        url: '"---require(\'./lessons/lesson3/audio4.mp3\')---"',
        id: 7500711715471,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-04.mp3?_=4',
      },
      {
        topic: 'Nature and the Environment',
        title: 'The Amazing Amazon',
        content:
          'M: The Amazon is an amazing river. It is unique in many ways. It is the second longest river in the world. It is 6,500 kilometers long. It starts up in the Andes Mountains. Its drainage basin (the area of land that collects water) covers 40 percent of South America. The Amazon River has many small rivers that supply it with water.\n\n',
        url: '"---require(\'./lessons/lesson3/audio5.mp3\')---"',
        id: 4922865686477,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-05.mp3?_=5',
      },
      {
        topic: 'Science and Technology',
        title: 'Research',
        content:
          'W: What are you doing, Billy?\n\nB : I’m doing research. I found a lot of great websites.\n\nW: You know, I think you might want to go to the library and look at some books.\n\nB : I don’t want to. It takes too much time, and besides, this is fast, easy, and fun. This paper will be done in no time.\n\nW: The Internet is great for finding information. But it is also full of misinformation and lies. You don’t really know what you are looking at unless you are at a reliable site. It’s safer to get some books first and then search for more information.\n\nB : Grandma, I love you, but I think you are a little old-fashioned. Look at all this great information! My report is on Albert Einstein. Now, according to this site, he was born in 1979, came up with the theory of relatives, and was awarded the Nobel Prize for Physics in 1922.\n\nW: Your information is wrong. Albert Einstein was born in 1879 and developed the theory of general relativity. He won the Nobel Prize in 1921.\n\nB : Wow! That means all this stuff is inaccurate. How did you know all that?\n\nW: Come with me to the library and I’ll help you find the books with those facts.\n\nB : Thank you, Grandma. You’re a real life-saver! ',
        url: '"---require(\'./lessons/lesson3/audio6.mp3\')---"',
        id: 9994442311252,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-06.mp3?_=1',
      },
      {
        topic: 'Science and Technology',
        title: 'A New Calculator',
        content:
          'W: Hi. I’d like to see your calculators.\n\nM: Did you have a certain model in mind, ma’am?\n\nW: I’m not thinking of any specific model. I want something simple for basic math.\n\nM: Is it for personal use?\n\nW: Yes. I just need it for shopping and keeping track of my bills.\n\nM: Well, the great thing is that these simple calculators are very inexpensive and small. Here is a solar model that never needs batteries. It is thin, too.\n\nW: It’s too small. I can’t read the numbers very easily.\n\nM: How about this one? It is a pocket calculator. It’s a bit bigger. The display is easier to read.\n\nW: Yes, I can see the numbers better. It is easier to hold, too. Is it also solar? ',
        url: '"---require(\'./lessons/lesson3/audio7.mp3\')---"',
        id: 243559360968,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-07.mp3?_=2',
      },
      {
        topic: 'Science and Technology',
        title: 'Racing Robots',
        content:
          'M: I have been interested in robots for as long as I can remember. The first thing I did when I entered high school was join the Robotech robot-making club. We get together after school every day and create our own robots. Nowadays it is very easy to find kits to build your own robot and these are what we use.\n\nThe highlight of the year for us is the annual Robot Maze race. Everyone who wants to take part has to make a small computer-controlled robot. You need to race it to the center of a maze. We work together in teams of three or four. This year, I am working with two students who won last year’s competition, so I think we have a really good chance of winning.\n\nOur robot is about 30 centimeters high. It weighs two kilograms. It should be really quick. We have been practicing often, and we have already equaled last year’s speed, so we just need to get a little faster. We are keeping the design of our robot secret. If we win, we will get $500. I hope this will be my lucky year. ',
        url: '"---require(\'./lessons/lesson3/audio8.mp3\')---"',
        id: 3422404680325,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-08.mp3?_=3',
      },
      {
        topic: 'Science and Technology',
        title: 'Online Chatting',
        content:
          'W: Philip, are you still chatting online? It’s 9:30 p.m. You have an exam tomorrow.\n\nB : Yes, Mom. I’ll get off in a minute.\n\nW: I read some articles about chatting online. I’m not so sure you should be spending so much time in front of your computer.\n\nB : Mom, that seems unfair. It can be very educational. You meet people from all over the world who talk about lots of different things.\n\nW: OK, maybe these people share their knowledge. I still think it is better to join clubs and socialize with real people.\n\nB : Do you think chatting online causes bad behavior? ',
        url: '"---require(\'./lessons/lesson3/audio9.mp3\')---"',
        id: 4629150333474,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-09.mp3?_=4',
      },
      {
        topic: 'Science and Technology',
        title: 'The Nobel Prize',
        content:
          'W: One of the greatest achievements in the world is to win the Nobel Prize. It has been given to people since 1901. There are prizes for physics, chemistry, and medicine. There are also prizes for literature, economics, and peace. The Nobel Prize is named after Alfred Nobel. He was born in Stockholm, Sweden, in 1833. Alfred Nobel invented dynamite in 1866. Dynamite is used in mining, construction, and war. Before he died, he wrote that all of his money should be used to create the Nobel Prize. He died in 1896. The first prize was given in 1901.\n\nEach prize has three parts: a diploma, a gold medal, and money. The money has increased since 1980. It is now ten million Swedish crowns. This is about one million euros. How are the winners chosen? Five committees secretly meet to pick the winners. The Nobel Prize for Economics is the only one that is not decided that way. That is because it was created in 1956 by the Bank of Sweden in honor of the fiftieth anniversary of Alfred Nobel’s death. The Bank of Sweden decides who gets the Nobel Prize for Economics. Since 1901, over 750 people have won the Nobel Prize. ',
        url: '"---require(\'./lessons/lesson3/audio10.mp3\')---"',
        id: 1196622676816,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-10.mp3?_=5',
      },
      {
        topic: 'Art and Culture',
        title: 'Great Art',
        content:
          'M: What makes a painting a great work of art? There are many answers to that question. Some people think that a painting should look pretty. Others disagree. The skill of the painter is important. The techniques used are also important. Most of all, a great painting has meaning. A great painting has a special element in it.\n\nSometimes, a painter’s special element is the way he portrays his or her feelings in a piece of art. An example of this is Picasso’s painting, Guernica. It has strange shapes in it. It shows suffering people, too. It is not a very pretty picture. However, it makes people understand Picasso’s feelings about war.\n\nOther times, the element is a memory or feeling. This comes from inside another person. Someone may see a painting and be reminded of a beautiful memory. A painting can also remind people of a feeling. For example, Leonardo da Vinci’s Mona Lisa is very popular. Many people like her smile. Some people say it is a mysterious smile. Others say it is a happy one. Still others make up stories about the woman in the painting.\n\nWhich element is the most important? Is it the skill of the artist or the feelings of the person looking at the painting? Whatever the case, a painting that grabs people’s emotions is popular. ',
        url: '"---require(\'./lessons/lesson3/audio11.mp3\')---"',
        id: 8316452615036,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-11.mp3?_=1',
      },
      {
        topic: 'Art and Culture',
        title: 'Talking Drums',
        content:
          'B : I want to be a member of a heavy metal band. I love heavy metal drums, James.\n\nM: I don’t, Henry! They are too heavy, if you ask me. I prefer a more traditional style, like African barrel drums.\n\nB : Barrel drums? What are those?\n\nM: They are made with hollow logs and animal skins. First, they cut down a tree. They cut a section that’s about as thick and tall as a barrel. They stretch an animal skin over the top, and tie it to the sides with wooden pegs. These pegs can be tightened to change the pitch.\n\nB : Hmm… that sounds interesting.\n\nM: In Nigeria, they have “talking” drums. They use a hollow tree trunk that’s smaller than a barrel drum, and leave an opening at both ends. Then they fit an animal skin on each end. There’s a string between each of these ends. When a player holds the drum under an armpit and squeezes, it tightens the string and raises the pitch.\n\nB : Why do they call it a “talking” drum?\n\nM: The drummers are so skillful they can make the drums imitate human voices. They seem to cry, laugh, and shout.\n\nB : I’d like to hear that.\n\nM: Why don’t you come to the community college with me tomorrow? A troupe from Africa is giving a concert, and they are supposed to have the best drummers in the world.\n\nB : Now, that sounds great! ',
        url: '"---require(\'./lessons/lesson3/audio12.mp3\')---"',
        id: 9229861759239,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-12.mp3?_=2',
      },
      {
        topic: 'Art and Culture',
        title: 'The Hot New Movie',
        content:
          'W: The latest blockbuster movie Robots Attack 2 starring Garrison Fort opened yesterday. Fort and Andy Robot are at it again, saving people from the jaws of death. The evil robots are invading Atlantis once again. The crowds seemed to love the sequel. Maybe they loved it as much, if not more than, the first Robots Attack. The special effects are fantastic! Mr. Fort seems to have worked on his fighting technique. His martial arts skills are amazing. He beats the evil robots easily.\n\nOf course, our leading man saves a lady in distress, the fair Angie. She promptly falls in\n\nlove with Garrison the hero. However, Andy Robot is jealous of this new love. He spends a good part of the movie trying to ruin their plans. Another surprise is the evil robot, Homer, who decides he wants to become a do-gooder. His partner, Ethel, works hard to\n\nmake him return to his evil ways.\n\nDoes Andy Robot succeed in rescuing Garrison Fort from love? What about Ethel? Does she bring Homer back to his evil ways? To find out, head for the theater, buy a ticket, and sit back and relax. ',
        url: '"---require(\'./lessons/lesson3/audio13.mp3\')---"',
        id: 7046588794459,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-13.mp3?_=3',
      },
      {
        topic: 'Art and Culture',
        title: 'A Faux Pas',
        content:
          'G : It happens a lot. So many people visit and live in foreign countries nowadays. The culture and manners of every country are different. It is likely that a foreigner will say or do something inappropriate. This is called a faux pas. In one culture, it is fine to do something one way. In another culture, it is rude.\n\nFor example, my friend visited a relative in Israel. She offered to wash the dishes. She did not know that it was important to wash the meat dishes with a special sponge. She used the wrong sponge. Her friend’s father was very upset. In Canada, it is fine to use the same sponge to wash all of the dishes, but not in Israel.\n\nSomething similar happened to me when I visited a temple in India. I was surprised when two officials stopped me and told me to take off my shoes. It was only then that I realized that people are not allowed to enter a temple with their shoes on. I was very embarrassed. Of course, I apologized for my mistake.\n\nA faux pas is embarrassing. No one wants to be rude. No one wants to cause problems. However, when two cultures meet, there can be misunderstandings. The next time someone is rude, be patient and understanding. He may think he is acting politely. ',
        url: '"---require(\'./lessons/lesson3/audio14.mp3\')---"',
        id: 694250936060,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-14.mp3?_=4',
      },
      {
        topic: 'Art and Culture',
        title: 'The List',
        content:
          'G : Thanks for coming, Dad. I can’t believe my first day of school is just next week!\n\nM: Your mother and I are proud of you. Greer is a very prestigious art school.\n\nG : There is an enormous list of art supplies. They are mostly items I don’t recognize.\n\nM: Let’s look for the supplies that you recognize, Megan, and then we can get help with the rest.\n\nG : I need a large drawing board. I also need a drawing pad one meter by half a meter in size, newsprint paper, and a set of artist’s drawing pencils.\n\nM: Here is the drawing board, and I noticed the pencils over there. What’s next?\n\nG : I need watercolor paint, various brushes, India ink, and a fountain pen.\n\nM: They are on the wall display.\n\nG : Now we need to locate the vine charcoal.\n\nM: Excuse me, miss.\n\nW: Yes, sir? How can I help you?\n\nM: We’re trying to find vine charcoal. Do you know what that is, and where we can find it? ',
        url: '"---require(\'./lessons/lesson3/audio15.mp3\')---"',
        id: 1007992438106,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-15.mp3?_=5',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Family Camping',
        content:
          'B : There are many popular leisure time activities, but one of the most enjoyable is family time. Most people enjoy being with their families. There are many things to do with your family, too. Families can go to the movies, travel, visit museums, and play sports together. The most common family activity is probably camping.\n\nMany families like camping. It is a chance for the whole family to work together. They can stay in the wild. Children gather dry wood for the fire. Their parents set up the tents. Then the whole family gathers around the fire. They enjoy a special meal together. Then, they set off into the woods with a compass and a map. After hiking the trails, everyone gets a fishing pole. Each person casts the fishing line out into the river. Who gets the biggest fish? It’s a great contest.\n\nLater, the children clean the fish by the river. They take the scales off the fish. Mom fries the fish over the campfire. Dad cleans up when everyone is finished. You don’t want wild animals coming to eat your leftovers! Then everyone goes into their tents for a restful night.\n\nWhile there are many things that families can do together, camping is probably the most exciting. ',
        url: '"---require(\'./lessons/lesson3/audio16.mp3\')---"',
        id: 3984429754801,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-16.mp3?_=1',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'The Amusement Park',
        content:
          'M: I love this amusement park, Fran! Thanks for suggesting it. I am having a fantastic time. There’s that new ride! It’s called, “The Volcano,” and it’s supposed to be amazing.\n\nW: That looks awfully high. Do you really want to try it? We’ve experienced “The Rocket,” the giant Ferris Wheel, and those bumper boats. Don’t you think that’s enough? Besides, I am absolutely starving.\n\nM: If you come on “The Volcano” with me, I’ll buy you a pizza with whatever toppings you want.\n\nW: Do you really mean any topping, even mushrooms, which you don’t like?\n\nM: Yes, I will even order a pizza with mushrooms!\n\nW: OK, Michael. I will try this last ride.\n\nM: Great, Fran! I know you will enjoy this. Did you know that when the volcano erupts, our seats shake? I heard it is quite an experience.\n\nW: I am not sure that I want to get on this ride anymore.\n\nM: Don’t worry, Fran. Look at the people getting off the ride. They look very satisfied.\n\nW: I’m sorry, but I don’t think I can do this, even for pizza. How would you feel if I bought lunch instead?\n\nM: I don’t want to force you to do something you really don’t want to do. And I am hungry. Sure, let’s get some lunch.\n\nW: I want to try this new restaurant called Skylight. The top of the restaurant spins while you eat!\n\nM: Oh, wow! Let’s go! ',
        url: '"---require(\'./lessons/lesson3/audio17.mp3\')---"',
        id: 6670241654890,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-17.mp3?_=2',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Fresh Lemonade',
        content:
          'B : How can I earn some extra money this summer?\n\nG : Why don’t we start a lemonade stand, Will?\n\nB : That’s a great idea, Mary, but do you think we will make any money?\n\nG : If we set up in an area with a lot of traffic on a hot day, we will get plenty of customers. We can charge $1.50 per cup.\n\nB : That sounds a little expensive.\n\nG : But we need to charge that much to cover our expenses. By charging $1.50 per cup, we can make good money with our lemonade stand.\n\nB : OK. What do we need to get started?\n\nG : We need the ingredients to make lemonade, so we need lemons, sugar, and water. We need something to keep our money in, a sign to advertise the lemonade, paper cups, and a cardboard box to use as a stand.\n\nB : Should we sell food to go with the lemonade?\n\nG : I think that would be too complicated. We would need a permit and either a cooler or stove. We should stick to just selling lemonade.\n\nB : You’re right, let’s just keep it simple. ',
        url: '"---require(\'./lessons/lesson3/audio18.mp3\')---"',
        id: 2149232710893,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-18.mp3?_=3',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'At the Movies',
        content:
          'M: Ticket prices have certainly gone up!\n\nW: Yes, but I really needed a break, so if the price is a bit higher, it doesn’t matter. Besides, I really want to see this movie on the big screen.\n\nM: Would you like something to snack on while we watch the movie?\n\nW: Sure. What do they have?\n\nM: It looks like the standard popcorn and soda. But there’s also ice cream, hot dogs, and coffee.\n\nW: I have a craving for chocolate, but I should attempt to eat something healthy. I want to avoid getting sick this year. I am trying to change my diet.\n\nM: I’m afraid the healthiest item may be the coffee.\n\nW: Do they have any muffins?\n\nM: No, but they do have brownies.\n\nW: I haven’t had a brownie in a long time. Please get me a brownie and a coffee. What are you getting?\n\nM: I’m getting the large popcorn and a cola.\n\nW: Here is some money.\n\nM: It’s on me.\n\nW: No, please. The tickets were extremely expensive. I know you are on a restricted budget.\n\nM: I insist. Did you want cream and sugar in your coffee?\n\nW: Well, thank you very much. No cream in the coffee, please.\n\nM: So, you probably don’t want sugar, either?\n\nW: No, I think there is enough sugar in the brownies. I’ll find us some seats near the aisle. ',
        url: '"---require(\'./lessons/lesson3/audio19.mp3\')---"',
        id: 7620179626234,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-19.mp3?_=4',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Hobbies',
        content:
          'G : When someone does an activity that is not a part of his or her job and is done for fun, it is called a hobby. Most people enjoy hobbies during their free time. Some people spend a lot of time on their hobbies. There are nearly as many kinds of hobbies, as there are people. A hobby can be about making or collecting things, or enjoying an experience. ',
        url: '"---require(\'./lessons/lesson3/audio20.mp3\')---"',
        id: 5206342994876,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-20.mp3?_=5',
      },
      {
        topic: 'School and Family',
        title: 'Defense!',
        content:
          'M: Stay low and bend your knees! Come over here.\n\nB : Yes, Coach?\n\nM: Jackson, when you’re playing defense, keep your knees bent and your body low. It helps you keep your balance. And it allows you to move more quickly in every direction.\n\nB : Like this?\n\nM: That’s right. You should attempt to stay on the balls of your feet. It’s like you are getting ready to pounce. Athletes never rest on their heels.\n\nB : Should I stand with my legs close together or far apart?\n\nM: It is best to keep them about shoulder-width apart. Bend your knees and keep your back straight. Spread your arms straight out at your sides.\n\nB : This seems almost like I’m getting ready to attack the ball.\n\nM: It is a little bit like that. Your stance looks much better than before.\n\nB : Coach, how do I move forward and backward on defense? I feel like my stance is fine, but when I try to dart toward my opponent, I keep tripping over my feet.\n\nM: When you move forward, put your right foot in front of you, with your toes pointing in the direction you want to go. When you move backward, just reverse it: follow the direction of your left foot. How are you feeling?\n\nB : My legs are tired and my back aches.\n\nM: Playing defense is hard work. Take a break, then we’ll try it again. ',
        url: '"---require(\'./lessons/lesson3/audio21.mp3\')---"',
        id: 2971365035213,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-21.mp3?_=1',
      },
      {
        topic: 'School and Family',
        title: 'The Importance of Writing',
        content:
          'B : This is terrible! I hate this assignment.\n\nW: What’s wrong, Timmy?\n\nB : I am frustrated because I need to write a book report, and I can’t get started.\n\nW: May I see your paper? There’s nothing here!\n\nB : I can’t think of anything to write, and it’s due tomorrow. To make matters worse, we have to perform an oral presentation in front of the entire class. I don’t see the purpose of writing a book report, anyway.\n\nW: Writing is a necessary skill that you’ll use for the rest of your life. This book report is just one way to begin learning that skill. It’s another form of communication and a means of expressing your thoughts. It allows others to understand what is in your heart and mind.\n\nB : I’ve never had to write before. Why should I start now?\n\nW: Now is the best time to begin. The best writers read a lot, and practice writing. Anyone can learn to write well. I know you can do it.\n\nB : OK, Mom. When you put it that way, I think I can do it.\n\nW: That’s the right attitude. Let’s try to organize some of your thoughts by brainstorming. What can you tell me about the book?\n\nB : The book? I’ve only watched the movie! Does that count?\n\nW: Oh, goodness! What kind of child am I raising?\n\nB : One that probably won’t be a famous writer!',
        url: '"---require(\'./lessons/lesson3/audio22.mp3\')---"',
        id: 8105839412432,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-22.mp3?_=2',
      },
      {
        topic: 'School and Family',
        title: 'The Course Schedule',
        content:
          'W: It’s so difficult to choose what courses to take this semester. Henry, have you chosen all of your courses yet? ',
        url: '"---require(\'./lessons/lesson3/audio23.mp3\')---"',
        id: 2192088746602,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-23.mp3?_=3',
      },
      {
        topic: 'School and Family',
        title: 'Food, Family, and Fun',
        content:
          'W: Thanksgiving is a special family holiday in America. Families come together to give thanks for all they have. Although every family celebrates in slightly different ways, a typical Thanksgiving is full of food, family, and fun. My family celebrates Thanksgiving, too.\n\nEveryone in my family goes to my parents’ place for Thanksgiving. We have a large meal.\n\nEveryone helps on Thanksgiving. The children set the table. My mother cooks the turkey using her own secret ingredients. My father makes the side dishes. He makes potatoes, beans, carrots, stuffing, oysters, and beets. My mom makes cranberry sauce. My sister-in-law brings a pumpkin pie. I come early to help my parents cook.\n\nWhen it is time to eat, we put all the food on the table. Everyone sits down. We each say what we are thankful for before we eat. Some of us are thankful for our health, and others are thankful for their jobs. Everyone is thankful for something different.\n\nThere is a lot of activity after the meal. My aunt and uncle clean off the table. My sister-in-law helps me wash the dishes. The teenagers wash and put away the silverware. The children help to tidy the dining room. My brothers take out the garbage. Then they go play football in the backyard. The rest of us sit down and relax. We are thankful for the food and our blessings. Most of all, we are thankful to have each other. ',
        url: '"---require(\'./lessons/lesson3/audio24.mp3\')---"',
        id: 6556974624621,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-24.mp3?_=4',
      },
      {
        topic: 'School and Family',
        title: 'The Project',
        content:
          'B : Hey Dad! Do you think you can help me out? I’ve just been assigned this enormous project at school, and I really don’t know where to begin.\n\nM: Sure Jason, I’ll give it my best shot.\n\nB : Oh, Dad, I know you will be a great help and inspiration to me.\n\nM: OK, OK. That’s enough flattery from you for one day. What’s this project about?\n\nB : Well, I have two choices. I can research a profession, or I can interview someone that I admire about their profession. If I do the second option, I must also add my own opinion about their profession.\n\nM: Well, I am an expert when it comes to my profession. Accounting is a noble profession and one that I am always happy to talk about.\n\nB : Dad, I know how much you love your career. It isn’t that I don’t admire you. But what I was hoping actually, was that you could speak to Mr. Chang, your diving friend, and see if he would agree to an interview. Diving for a living sounds cool!\n\nM: I see. That’s a great idea! You know how I really dislike talking about myself for too long. Let me give David Chang a call right now and find out.\n\nB : Thanks, Dad! You’re the best! I know this will be an awesome project! ',
        url: '"---require(\'./lessons/lesson3/audio25.mp3\')---"',
        id: 4115961291830,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-25.mp3?_=5',
      },
      {
        topic: 'People and Work',
        title: 'The Assignment',
        content:
          'B : Hello Wendy! Who did you do your homework about?\n\nG : I wrote about my dad because he is a firefighter.\n\nB : Really? Does he actually go into burning buildings?\n\nG : Yes, and he sometimes has to crawl into tight places to rescue people.\n\nB : Has he ever been trapped in a burning building?\n\nG : Well, one time he needed to break down a door. He was carrying a little girl out of her house. Someone left the stove on, and it ignited a fire in the kitchen.\n\nB : Was everyone all right?\n\nG : All five people living there escaped safely, but the house burned to the ground.\n\nB : Your dad is incredibly brave, a real hero. What does he do at the fire station?\n\nG : He resides there for a few days when he works. All of the firefighters cook, eat, and clean together. When there’s a fire, they slide down a pole into the fire station’s garage to get their fire-fighting equipment. They quickly put on their gear and then jump onto the fire trucks. My dad loves to drive the fire trucks.\n\nB : Wow! Maybe I should be a firefighter someday.\n\nG : I’m definitely going to be a firefighter, Ian. I want to be just like my dad. ',
        url: '"---require(\'./lessons/lesson3/audio26.mp3\')---"',
        id: 3025057642683,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-26.mp3?_=1',
      },
      {
        topic: 'People and Work',
        title: 'CoCo Lee',
        content:
          'G : Ferren Lee’s mother hoped her daughter would follow in her footsteps and become a doctor. However, Ferren always knew she wanted to sing.\n\nIn her spare time, Ferren sang along with pop songs. Ferren also entered singing contests. She won many competitions. Her big break came after high school. She was on vacation in Hong Kong and took second place in an important singing competition. She got a recording contract with Fancy Pie Records, and, a few years later, Sony.\n\nToday, CoCo Lee, as she is now known, is one of the most famous pop singers in the world. She was born in Hong Kong on January 17, 1975, but she was raised in San Francisco. She has made records in English and Chinese. Her 1998 album, DiDaDi, won the MTV Asia music award for best album and best music video. CoCo’s next album was in English. It was called Just No Other Way. It introduced her to American audiences.\n\nApart from her beautiful voice and stunning looks, CoCo Lee is intelligent. She had a 3.8\n\ngrade-point average in college. She also earned a double major in bio-chemistry and bio-science. One of her dreams, she says, is to help find a cure for cancer.\n\nWho knows? CoCo’s mother may yet get her wish. ',
        url: '"---require(\'./lessons/lesson3/audio27.mp3\')---"',
        id: 8526301829064,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-27.mp3?_=2',
      },
      {
        topic: 'People and Work',
        title: 'A Blind Date',
        content:
          'W: What’s wrong, Mike? You appear to be depressed.\n\nM: I haven’t slept in days, and I feel awful. My fiancée and I broke up just before I went to Madrid for the concert.\n\nW: Why didn’t you say something? No wonder your playing sounded so bad. Oh dear, I’m really sorry.\n\nM: It was an appalling performance, I agree. I was miserable and unhappy, but I had to perform, anyway.\n\nW: Have you been seeing anyone else since you broke up with her?\n\nM: No, I have been working overtime instead. The conductor was not pleased with my last performance. Besides, don’t you think it’s too soon?\n\nW: Not at all. You might just need to get out and socialize. Hey, I’ve got a fabulous idea!\n\nM: Oh no, not another one of your ideas. What is it this time?\n\nW: Do you remember me telling you about Julia, a friend from work?\n\nM: I think so. Why?\n\nW: Well, she is single. I could set up the two of you.\n\nM: A blind date? I tried that when I was younger, and it was a disaster.\n\nW: Come on, Mike. I’d be helping two friends who will, of course, have a great time together. She has a charming personality, and she also plays the oboe. You can go to the concert in the park on Saturday afternoon. Maybe you can have coffee afterwards. ',
        url: '"---require(\'./lessons/lesson3/audio28.mp3\')---"',
        id: 2392606483359,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-28.mp3?_=3',
      },
      {
        topic: 'People and Work',
        title: 'Crime Does Not Pay',
        content:
          'B : Have you ever thought about committing a crime? Have you ever dreamed about holding up a bank and driving away in a fast car? Or, have you ever thought about taking a famous painting from a big museum?\n\nThere are many stories in movies and on TV of criminals who make a lot of money. They go on to live a life of luxury. However, for every successful criminal, there are many, many more who fail. These crooks soon regret their crimes.\n\nTake the example of a man in Winnipeg who tried to break into cars in a police academy parking lot. The man was found by the police in the parking lot. They saw him trying to open the doors of all the cars. The man was hoping to find some loose change, or maybe take some good car stereos.\n\nHowever, he did not know that he was being watched by police officers. He chose the parking lot because it was in a very quiet area. He thought that no one would see him. He was soon arrested by the police. A foolish criminal like this man shows us that crime does not pay. ',
        url: '"---require(\'./lessons/lesson3/audio29.mp3\')---"',
        id: 7989099949468,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-29.mp3?_=4',
      },
      {
        topic: 'People and Work',
        title: 'A Job Interview',
        content:
          'M: Hello, Ms. Jones? Please, come in and sit down.\n\nW: Thank you.\n\nM: So, you’re applying for the position of computer technician.\n\nW: Yes, that’s right.\n\nM: My name is Mr. Smith, and I will be interviewing you today.\n\nW: Nice to meet you.\n\nM: Can you tell me a little bit about yourself?\n\nW: As my résumé shows, I graduated from Leeds University with a Computer Science degree. During my junior and senior years, I worked part time as a computer lab monitor in the university. As part of that job, I helped students with PC and desktop application problems and did hardware and software maintenance. I also taught a weekly one-hour class on how to use Microsoft Office applications.\n\nM: How would you describe yourself?\n\nW: I really enjoy problem solving, and I’m hardworking. I’m also very organized, so when I have a lot of problems to deal with, I make a list and work through it from the most to the least urgent. That way, I can get everything done within the set deadlines.\n\nM: That’s a good way to manage your time. Just one more question. Why do you want to work for us?\n\nW: Your company is well-known, and is respected in the computer industry. I would really like a chance to be part of your company.\n\nM: OK. Thank you for coming in. I’ll be in touch.\n\nW: Thank you. Goodbye. \n\n ',
        url: '"---require(\'./lessons/lesson3/audio30.mp3\')---"',
        id: 9831920449865,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-30.mp3?_=5',
      },
      {
        topic: 'Sports and Health',
        title: 'An Ounce of Prevention',
        content:
          'M: Hi, Sandy. I have a question for you.\n\nW: Sure, Joe.\n\nM: I need to have a physical examination, and there is a new clinic on Elm Street. Have you heard anything about it?\n\nW: One of my friends went there recently. She said it was very hygienic and well-run. It is great to have a new clinic close by, since there is a shortage of doctors around here. Why are you going?\n\nM: I’ve just joined a gym. I want to get more exercise, and they require a medical exam before I can start.\n\nW: What kind of tests do they want you to have?\n\nM: They want to know my blood pressure, how much I weigh, and results from a blood test to check for any possible diseases. I feel terrific, so I’m not worried.\n\nW: I had a routine check-up last month, and the doctor discovered that my blood pressure is a little high. It’s not serious, but I am glad that I found out about it. I am walking every day, and I have cut down on my salt intake. I would rather not take medication if I don’t have to. The change in diet has really made me feel better. You know the saying, “An ounce of prevention is worth a pound of cure.” ',
        url: '"---require(\'./lessons/lesson3/audio31.mp3\')---"',
        id: 5587353814559,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-31.mp3?_=1',
      },
      {
        topic: 'Sports and Health',
        title: 'Herbal Medicine',
        content:
          'G : Everyone wants to be healthy. People see doctors. They take pills to stay healthy. However, plants have been used to heal for thousands of years. More and more people are trying herbs to stay healthy. Plants used to heal are called “herbal medicine.”\n\nThere are many plants used in herbal medicine. Each plant is used in a certain way. Herbal medicine works more slowly than most pills. Many people think plants are gentle on the body. There are a lot of examples of helpful plants. Ginger can help your body. Eating ginger often may help you stay healthy. Another helpful plant is parsley. It can stop bad breath.\n\nHerbs may be gentler than some pills. However, this does not mean that anyone can take them in any way. You should always be careful. Some herbs can be harmful, too. Too much rosemary can be very bad for your stomach. It can make you sick. Foxglove is a very pretty flower. It also has poison in it.\n\nNevertheless, if you are afraid of using herbs, you may be surprised. You have probably already used some kind of herbal medicine. Coffee, garlic, ginseng, and peppermint are all used in herbal medicine. Herbal medicine is becoming popular again, as people become more interested in their health. ',
        url: '"---require(\'./lessons/lesson3/audio32.mp3\')---"',
        id: 6285029191686,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-32.mp3?_=2',
      },
      {
        topic: 'Sports and Health',
        title: 'Home Remedies',
        content:
          'W: Everyone gets a cold now and then. Doctors cannot cure colds. Sleep and rest are good for taking care of a cold. However, in almost every culture, most families have a home remedy for colds. These remedies are passed down from parents to children. They have changed very little over time.\n\nDifferent cultures use different ingredients. In Mexico, cinnamon, raisins, oregano, and hot water are used to make a special tea. Honey is sometimes added. A fruit called genipap is used as a cold remedy in Puerto Rico. The fruit is cut up. It is then soaked in water. Sugar can be added to make it sweet. Chicken soup is popular in America. A large chicken is boiled in a pot. Carrots, onions, garlic, and other vegetables are usually added. Ginger tea is used to help a cold in China. A ginger root is peeled. It is then crushed. The ginger is boiled for about thirty minutes. Some honey can be added after it is done.\n\nEach family usually has a home remedy for a cold. Some remedies work. Some do not. Some taste good. Others do not. No matter what, home remedies are sure to be around for a long time ',
        url: '"---require(\'./lessons/lesson3/audio33.mp3\')---"',
        id: 4795175718779,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-33.mp3?_=3',
      },
      {
        topic: 'Sports and Health',
        title: 'Too Much of a Good Thing?',
        content:
          'M: Hi, Jenny. Are you drinking coffee again?\n\nW: Hi, Sam. This is my third cup.\n\nM: Are you sure it’s all right to drink so much? Don’t you think all that caffeine is bad for you?\n\nW: No, that’s a misconception. Everyone thinks coffee is bad for you, but it’s not.\n\nM: Really?\n\nW: According to an article I read, coffee can be beneficial to your health.\n\nM: That’s interesting. But you should remember that one study does not prove much. There are a lot of other studies out there, too.\n\nW: This doctor in Italy found a lot of benefits.\n\nM: Such as?\n\nW: She says the chemicals in coffee can be good for your heart and may relieve headaches, too.\n\nM: I know that some coffee can be good sometimes, but drinking too much is not beneficial. Coffee has a lot of caffeine, which is addictive. It affects your blood circulation and removes calcium from your bones.\n\nW: The doctor did admit that it is not for everyone, and that you shouldn’t drink more than three cups a day.\n\nM: You seem nervous when you drink a lot. And remember when you told me that you are not sleeping well? Do you think that maybe you should cut back?\n\nW: I appreciate your concern. I was thinking of cutting back. Would you like a cup of green tea? ',
        url: '"---require(\'./lessons/lesson3/audio34.mp3\')---"',
        id: 3098467815919,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-34.mp3?_=4',
      },
      {
        topic: 'Sports and Health',
        title: 'Soccer Rules',
        content:
          'B : Soccer is one of the most popular sports in the world. Although the main idea of the game is easy to understand, there are many rules to be followed.\n\nA player gets a yellow card for not following the rules. A yellow card is a warning. If a player keeps breaking the rules, he gets a red card. When this happens, he cannot play anymore. He is ejected from the game.\n\nAnother rule is about “handling.” “Handling” is when another player touches the ball with his hands on purpose. Players cannot handle the ball. A player may not do anything that is dangerous to another player. He cannot kick an opponent’s legs to get the ball.\n\nThere are also some lesser-known rules. A player is not allowed to impede an opponent. This means that a player cannot purposely slow down another player on the field. A penalty can be called if this occurs. There is a rule about blocking a goalkeeper, too. A yellow card or an indirect kick can be given to the opponent’s team if a player tries this. Yes, soccer is full of rules! ',
        url: '"---require(\'./lessons/lesson3/audio35.mp3\')---"',
        id: 1594812537812,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-35.mp3?_=5',
      },
      {
        topic: 'Travel and Transport',
        title: 'Visit Frisco City!',
        content:
          'M: Frisco City is the place for your next vacation. The city has lots of shopping, food, and fun. There are so many things to do!\n\nThe River Walk is a must-see. Take a city bus to any of the three downtown stops. There, you will find stairs. The stairs go down to the riverside. There are about five kilometers of sidewalk on either side of the river. Palm trees and cypress trees decorate the area. There are also tropical plants. You will see many unique shops, casual cafés, and upscale restaurants. Every shop is different. You can ride one of the riverboats and hear a guide talk about the history of the River Walk.\n\nHowever, the River Walk is only one of the attractions of Frisco City. There are also two amusement parks just outside Frisco City. You can enjoy a day of fun in the sun at Water World Park. You can also spend the day enjoying the roller coasters and other rides at Sun Land.\n\nVisit Frisco City! You will have a great time. \n\n',
        url: '"---require(\'./lessons/lesson3/audio36.mp3\')---"',
        id: 9161872251695,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-36.mp3?_=1',
      },
      {
        topic: 'Travel and Transport',
        title: 'Asking for Directions',
        content:
          'W: Asking for directions can be risky. I realized exactly how risky it could be when I needed to meet one of my friends one day.\n\nA while ago, I arranged to meet my friend at a new mall. My friend had been there before and indicated that we should shop there together. We planned to meet at 3:00 p.m. at Burger Palace in the mall.\n\nWhen I arrived at the mall, I realized I did not know where Burger Palace was, so I asked a woman for directions. She advised me to go straight past the bank, and turn right before the food court. She mentioned that I would walk for a few minutes, passing a shoe store until I reached Burger Palace, which was next to the bookstore. I followed her directions and arrived just in time.\n\nTwenty minutes later, I was beginning to wonder where my friend was. Thirty minutes later, I was worried. I did not know what to do, so I just kept waiting. At around 3:40 p.m., I saw my friend walking quickly toward me. I rushed to him and demanded to know what happened. “I was at the other Burger Palace!” he cried. We had not realized there were two Burger Palaces in the mall.\n\nSince then, I have made sure that I get the directions from my friends before I go to meet them. It saves me a lot of trouble! ',
        url: '"---require(\'./lessons/lesson3/audio37.mp3\')---"',
        id: 6761717469557,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-37.mp3?_=2',
      },
      {
        topic: 'Travel and Transport',
        title: 'Fixing a Flat',
        content: 'M: When your car gets a flat tire, do not panic. \n\n',
        url: '"---require(\'./lessons/lesson3/audio38.mp3\')---"',
        id: 7440809019767,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-38.mp3?_=3',
      },
      {
        topic: 'Travel and Transport',
        title: 'The Exchange Rate',
        content:
          'M: Welcome to the Atlanta International Airport,ma’am. How may I help you?\n\nW: I am traveling to Venezuela. Can you tell me what the exchange rate is for the dollar?\n\nM: One moment, please, and I will look it up. The currency in Venezuela is the bolivar. The exchange rate is 200 bolivars per dollar.\n\nW: That seems rather low. Are you certain that that is all the dollar is worth?\n\nM: There may be several local businesses that may exchange for a higher rate, but the official rate is the one I gave you.\n\nW: Can I exchange 100 dollars? I need to have some money for a taxi and a hotel once I arrive in Caracas.\n\nM: No problem. Here is your money. Would you like a receipt?\n\nW: Yes, please. I will need it to keep track of my business expenses.\n\nM: Is there anything else I can do for you?\n\nW: I just have one more question. Do you know where I can exchange dollars in Venezuela once I arrive? I will probably need more cash, and I want to find a reliable exchange.\n\nM: The best place to exchange money is at a large bank. They will always give you the official rate. You can also find money exchange stores in most large cities.\n\nW: Wonderful. I will look for a bank. I appreciate your advice.\n\nM: My pleasure. I hope you enjoy Venezuela. ',
        url: '"---require(\'./lessons/lesson3/audio39.mp3\')---"',
        id: 328293696171,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-39.mp3?_=4',
      },
      {
        topic: 'Travel and Transport',
        title: 'The First Nations',
        content:
          'G : The First Nations are the people who lived in North America before Europeans migrated there.\n\nThere is a place in Canada where you can learn about the culture of the First Nations. It is where the First Nations people used to live. Now, a Visitors’ Center is there. There is also an archeology lab and walking trails. You can learn about the culture through the displays in the Center. The displays show everyday activities. They show how the people lived.\n\nThe gift shop in the Visitors’ Center sells crafts made by the First Nations people. There are jewelry, paintings, and pottery. You can also eat at the restaurant. Bison meat is in many dishes. There are also wild rice dishes, fruit pies, and traditional bread. All of the food is tasty.\n\nThe archeology lab is run by the local university. A big window lets you see the archeologists working. They found a very old spearhead. They also found ancient human bones.\n\nThe First Nations Visitors’ Center is a great place. You can learn about the First Nations’ culture. You can also see archeologists at work. You can walk on the trails, or enjoy a traditional meal. It is an experience to remember. ',
        url: '"---require(\'./lessons/lesson3/audio40.mp3\')---"',
        id: 5003054614410,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-3-40.mp3?_=5',
      },
    ],
  },
  {
    id: 4,
    title: 'Listening Practice Through Dictation Level 4',
    units: [
      {
        topic: 'Nature and the Environment',
        title: 'Hibernation',
        content:
          'W: Some animals in cold climates hibernate. This means that they spend the winter months in a very long and deep sleep. Many animals find shelter underground. They dig out shelters to sleep in. Animals that cannot dig find cracks or holes at the base of trees and bushes. If they like the place they find, they might use it for years and years.\n\nAnimals that hibernate include cold-blooded animals, such as lizards, frogs, and snakes. Many warm-blooded animals also hibernate, such as mice, bats, and squirrels. When these animals are hibernating, they seem like they are not alive at all. Warm-blooded animals seem colder to the touch. However, their blood is still very warm. Hibernating animals have a very slow heartbeat. They almost stop breathing. Extra blood sugar and fat in their bodies keep them alive. They eat lots of food just before they hibernate.\n\nWinters that do not stay cold are dangerous for hibernating animals. They can sometimes wake up in their shelters when it gets a little warm. Then they use energy by moving around. During winter, there is very little food. These animals can get very thin and weak. If they move around too much and do not eat, they can die.\n\nAnimals hibernate to escape the cold. There are also animals in hot climates that escape the heat. During very hot or dry weather, they sleep underground. This is called aestivation. ',
        url: '"---require(\'./lessons/lesson4/audio1.mp3\')---"',
        id: 7539173141114,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-01.mp3?_=1',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Falling Leaves',
        content:
          'M: Autumn, or fall, is the season between summer and winter. The days become shorter, and the air gets cooler. Trees sense these changes, so they start preparing for colder weather.\n\nTrees that have leaves block water and food from coming through the branches to the leaves. When this happens, the leaves die. They fall off the tree or the wind blows them away. This is why autumn is usually called fall in America. As the leaves start to die, they appear to change from green to red, yellow, orange, or brown.\n\nActually, the leaves are really these colors all year long. They look green because of a chemical called chlorophyll. Chlorophyll works with the sun to help the trees make food. In autumn, when there is less sun, the tree cannot make chlorophyll, so the green color fades. This reveals other colors, like red and yellow, that were always in the leaves.\n\nLike trees, animals also sense changes in the cooler autumn climate. Animals that hibernate eat a lot during autumn. They gain weight to store energy in the form of fat. They use this energy to survive the winter while hibernating. Many birds survive the cold in a different way: they leave. Each year, many birds migrate south to warmer climates during autumn. They migrate north again in the spring. Not a bad idea if you ask me! After all, who would refuse a mid-winter trip to sunny Thailand? \n\n',
        url: '"---require(\'./lessons/lesson4/audio2.mp3\')---"',
        id: 4730817703960,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-02.mp3?_=2',
      },
      {
        topic: 'Nature and the Environment',
        title: 'How the Dinosaurs Disappeared',
        content:
          'G : The death of the dinosaurs is a great mystery. About 65 million years ago, dinosaurs lived all over the Earth. They had existed for nearly 200 million years. Suddenly, they all became extinct.\n\nMany scientists believe that the dinosaurs were killed by a large meteor. They think that this meteor was about six to twelve miles wide. It crashed into southern Mexico and made a hole about 130 miles wide. The crash threw dust and dirt into the sky. Dust clouds darkened the Earth’s atmosphere. The crash caused fires, earthquakes, and tidal waves. The plants were killed. The oceans were poisoned. Very soon, there was no food left for the plant-eating dinosaurs. When they died, there was no food for the meat-eating dinosaurs. The meteor killed almost 70 percent of all plants and animals on Earth. The only animals that could survive were small ones that could eat many different kinds of food.\n\nSome scientists say the meteor alone did not cause dinosaurs to become extinct. They think that dinosaurs were already getting weaker. They are not sure why. One reason might be disease. Another might be climate change. A big part of the mystery is why some types of animals survived. If climate change killed dinosaurs, it should also have killed frogs. If the meteor killed most sea reptiles, it should have killed crocodiles. Yet frogs and crocodiles still exist in the world today. \n\n',
        url: '"---require(\'./lessons/lesson4/audio3.mp3\')---"',
        id: 9932250405012,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-03.mp3?_=3',
      },
      {
        topic: 'Nature and the Environment',
        title: 'Acid Rain!',
        content:
          'M: I hate this rain. It’s causing the traffic to back up for miles!\n\nW: Well, I hate this traffic, because it’s helping turn this rain into acid rain.\n\nM: I heard that acid rain has really bad effects. Doesn’t it cause cancer and brain damage, and even Alzheimer’s disease?\n\nW: It definitely can, but the major thing it does is cause breathing problems. The acid in the rain comes from smoke and gases that are given off by cars and factories. It’s like riding your bike behind a bus that’s showering you with its exhaust fumes.\n\nM: Oh, I was reading something about that the other day. It said there’s too much sulfur in the air and that it’s killing thousands of people every year.\n\nW: Yes. Sulfur is the major element in factory and car exhaust. It combines with oxygen and nitrogen in the air to become the acid in acid rain. This stuff doesn’t just kill us, you know. It also kills trees and lakes and animals. The acid soaks into the plants and animals, so that anyone who eats the plants and animals is also eating the acid.\n\nM: This sounds terrible! What can people do to stop acid rain?\n\nW: One simple thing they could do is to use less energy. Another way to stop acid rain is to drive less, or at least carpool. Imagine if every car on this road had four people in it right now. There would be fewer cars and a lot less acid rain. ',
        url: '"---require(\'./lessons/lesson4/audio4.mp3\')---"',
        id: 2685728512253,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-04.mp3?_=4',
      },
      {
        topic: 'Nature and the Environment',
        title: 'The Weather Forecast',
        content:
          'Part I\n\nW1: And now, over to Barry with our weather forecast for this weekend. How’s it looking for this weekend, Barry? Speaking for myself, I know I’m looking forward to clear skies. The past two weeks have been even rainier than usual for Seattle. ',
        url: '"---require(\'./lessons/lesson4/audio5.mp3\')---"',
        id: 4624060876832,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-05.mp3?_=5',
      },
      {
        topic: 'Science and Technology',
        title: 'Who Invented That?',
        content:
          'W: What’s so funny? I can’t concentrate on my work if you keep laughing loudly like that.\n\nM: I’m sorry. It’s just that I’m reading this article in Science Today magazine about some of the unusual things that people have invented. These inventions are incredible!\n\nW: OK, tell me about some of these inventions, and let’s see if I think they’re as funny as you do.\n\nM: All right. The first one is a ladder for spiders, “a thin, flexible, rubber strip which attaches to the top edge of the bath.”\n\nW: Ha ha! I wonder how long it took someone to invent that. ',
        url: '"---require(\'./lessons/lesson4/audio6.mp3\')---"',
        id: 1941424178932,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-06.mp3?_=1',
      },
      {
        topic: 'Science and Technology',
        title: 'The White Noise Machine',
        content:
          'W: And now ladies and gentlemen, the moment you have all been waiting for. Here’s the winner of this year’s science contest: Charles Moore! Charles, tell everyone about your invention.\n\nM: Thank you! For the science contest this year, I’ve invented a white noise machine. Let me explain what that is. Have you ever been kept awake at night because of the sound of traffic, or people talking, or loud music? These types of noise are sometimes called dark noise. Dark noise is made up of sounds that bother you so much that you\n\ncan’t concentrate on what you are doing.\n\nWhite noise is not exactly noise; in fact, white noise can’t be heard at all. White noise is made up of invisible waves of sound that reduce the effects of dark noise by making sounds of the opposite frequency. It’s like being in the ocean and seeing a large wave coming toward you. It might knock you down. But if you could send a wave, or many small waves, toward the big wave, it wouldn’t be as powerful, because the small waves would hit it and reduce its size.\n\nMy machine does this with sound. As a sound enters the microphone, the machine determines the sound’s frequency. Then it makes a sound in the opposite frequency that cancels out the first sound. I hope my machine will give some peace and quiet to people living in noisy places. Thank you. ',
        url: '"---require(\'./lessons/lesson4/audio7.mp3\')---"',
        id: 4020656949589,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-07.mp3?_=2',
      },
      {
        topic: 'Science and Technology',
        title: 'Inches and Centimeters',
        content:
          'B : Hi, Julie. I’m trying to figure out the dimensions of this MP4 player I want to buy, but I’m having trouble converting these English measurements. You’re really good at mathematics, aren’t you? It says that the MP4 player is 3.6 inches tall and two inches wide, but what does that mean in centimeters?\n\nG : Well, according to my math book, one inch equals 2.54 centimeters, so to convert that, we need to multiply each English measurement by that number. Wait, I have a calculator in my pocket.\n\nB : Great!\n\nG : According to the calculator, that would make it 9.1 centimeters tall and, let’s see, about five centimeters wide.\n\nB : So, its height is about nine centimeters and its width is about five centimeters, but what about its weight? The website says that it weighs 3.6 ounces.\n\nG : We multiply 3.6 by 28.3, which is the equivalent in grams, and that converts to about 102 grams.\n\nB : All right then, the MP4 player is about nine centimeters tall and five centimeters wide, and weighs about 102 grams. I thought it would have to have larger dimensions to be able to hold 5,000 songs, but it’s small and light! Do you think I should buy it, Julie?\n\nG : It sounds like a good product, but it depends on the price.\n\nB : Well, now I have the same sort of problem again. Could you help me figure out how to convert Chinese currency to our currency? ',
        url: '"---require(\'./lessons/lesson4/audio8.mp3\')---"',
        id: 3434854286240,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-08.mp3?_=3',
      },
      {
        topic: 'Science and Technology',
        title: 'Communicating Online',
        content:
          'M: Computers have transformed the way people communicate. In some ways this transformation is good, but in other ways it could be harmful. Statistics show that millions of people use the Internet every day. People shop online, play games, and search for information. Studies also show that people use the Internet mainly for communication.\n\nThe Internet has made communication fast and convenient. Email can travel anywhere within seconds. Chat rooms include people from all over the world. People can even make Internet telephone calls.\n\nHowever, this type of communication is very different from what people did in the past. People spend less time talking face to face. They might “chat” for days without being in the same room with a real person. They also might communicate with many people at the same time. Some researchers think this is unhealthy. One study on Internet use found that people who used the Internet a lot were lonely. Also, they did not communicate as much with members of their family.\n\nMany people have criticized this study. They say it did not include enough people and that loneliness is hard to measure. In my opinion, all types of communication are good. It is great to email someone and get a fast response. It is also nice to talk face to face. We can do both. The Internet is a fantastic tool. We should use it wisely to benefit from it. ',
        url: '"---require(\'./lessons/lesson4/audio9.mp3\')---"',
        id: 5258875279757,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-09.mp3?_=4',
      },
      {
        topic: 'Science and Technology',
        title: 'Science for Girls',
        content:
          'G : Hi. My name is Sandy. Welcome to physics, my favorite class. Although there are 30 students in our class, only six of us are girls.\n\nMost of my friends don’t like science as much as I do. They are convinced that science and mathematics are “boys’ subjects.” They say that boys learn about science and mathematics by playing with toys like building blocks, racing cars, and simple machines, while girls play with toys like dolls and tea sets. They say their parents didn’t do science experiments with them or encourage them to learn math.\n\nWell, that wasn’t the case with me! I played with dolls, too, but my parents also built up my confidence in science and math. They used long plastic rods, which are like sticks, to help me learn addition, subtraction, multiplication, and division. For my eighth birthday, they gave me a kids’ chemistry set, which helped me do all sorts of cool experiments! Whenever we went to the park, my parents asked me different questions about the plants and animals that we saw. When we got home, we looked up the answers together. ',
        url: '"---require(\'./lessons/lesson4/audio10.mp3\')---"',
        id: 268569528463,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-10.mp3?_=5',
      },
      {
        topic: 'Art and Culture',
        title: 'On Stage!',
        content:
          'W: Love. Hate. Death. These things are at the heart of Shakespeare’s famous tragedy, Romeo and Juliet. The St. Stephens High School drama club performed this play last weekend.\n\nRomeo and Juliet is the story of two families, the Capulets and the Montagues, who are bitter enemies. Tragedy follows when the son of one falls in love with the daughter of the other. The play is set in Verona, Italy, in the late 16th century.\n\nAllison Bourne played Juliet, Capulet’s beautiful young daughter. She showed the mixed emotions Juliet felt after secretly marrying the son of her family’s most hated enemy. At times, she was happy, and at times, she was afraid.\n\nDavid Taylor played Romeo, Montague’s son. He put on a good performance despite having a head cold. His lines were said with great feeling in a clear voice.\n\nEric Parker was the perfect Tybalt: dark and angry. Maggie Jones played the nurse. She acted the part of a gossipy old woman very well. She made everyone in the audience laugh at her jokes and her comic character.\n\nThe whole cast showed enthusiasm in every scene. The actors knew the meaning of their lines. They used body language to show this meaning well. The stage lights were sometimes too bright or too dim. But the sword fights looked very real, and the costumes were wonderful.\n\nOverall, St. Stephens’ production of Romeo and Juliet was a great night of high school theater. ',
        url: '"---require(\'./lessons/lesson4/audio11.mp3\')---"',
        id: 2254187368248,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-11.mp3?_=1',
      },
      {
        topic: 'Art and Culture',
        title: 'A Famous Portrait',
        content:
          'B : The Mona Lisa is one of the most famous paintings in the world. It was painted by the great Italian artist, Leonardo da Vinci, between the years 1503 and 1505. The portrait was done with oil paint on a simple piece of wood. The portrait shows a woman in front of a landscape with mountains. Many people believe that the model for the painting was the wife of an important man in the area. However, some people now think that da Vinci actually drew a picture of himself. They say the face looks similar to his. Apparently, da Vinci loved the painting so much that he carried it with him at all times until he sold it to the king of France.\n\nThe portrait is famous for several reasons. The best-known reason is for Mona Lisa’s unusual smile. It is difficult to say if she is being pleasant or looking arrogant. Another reason the painting is famous is that it was stolen from an art museum in 1911. Both France and Italy sent people to look for the lost painting. It was then found two years later in a hotel in France. It is currently on display at the Louvre Museum in Paris. People from all over the world go to the museum each year to see the Mona Lisa. In fact, the painting has so much appeal today that it has been copied many times. ',
        url: '"---require(\'./lessons/lesson4/audio12.mp3\')---"',
        id: 489329204638,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-12.mp3?_=2',
      },
      {
        topic: 'Art and Culture',
        title: 'Leonardo da Vinci',
        content:
          'M: When most people hear the name Leonardo da Vinci, they think of art. But in fact, he was a man of many talents. He was a scientist, an inventor, and an artist.\n\nLeonardo da Vinci was born in 1452 in Vinci, Italy. When he was 14, his father sent him to Florence to train under Andrea del Verrocchio, one of the best artists in the area. Leonardo became better than Verrocchio. By his early twenties, Leonardo was famous for his painting. He was especially good at painting colors and details. This made his paintings very lifelike. His most famous paintings are the Mona Lisa and The Last Supper.\n\nLeonardo was also a great scientist. He was a good observer of life and nature. He would ask himself simple questions like, “How do birds fly?” Then he would try to find the answers. He was interested in everything. For example, he studied the inner workings of the human body. He would cut up dead bodies to examine their insides.\n\nLeonardo was also a talented inventor. He believed that by understanding how each part of a machine worked, the parts could be changed and combined in different ways to make new machines. Using his artistic talent, Leonardo drew pictures of many inventions. However, few of them were built and tested during his lifetime. For example, his parachute wasn’t built until 1783. Also, his war tank wasn’t used until World War I in 1917. \n\n',
        url: '"---require(\'./lessons/lesson4/audio13.mp3\')---"',
        id: 4701077219311,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-13.mp3?_=3',
      },
      {
        topic: 'Art and Culture',
        title: 'Ludwig van Beethoven',
        content:
          'G : Ludwig van Beethoven was a musical genius. He composed hundreds of songs in his lifetime. The first four notes of his Fifth Symphony—bom bom bom bommmmm—are the most famous in the world. These notes are played on a trombone. Beethoven was the first composer to use trombones in a symphony. A symphony is a very complex and beautiful song. Beethoven wrote nine symphonies in all. He said that he first composed symphonies in his head. He heard the part for every instrument in his mind before he wrote the first note on paper.\n\nBeethoven was born in 1770 in Bonn, Germany. His birthday was probably in December. Nobody is sure. He gave his first public performance at age seven. He wrote his first composition before he was 12. Sadly, at the age of 28, he started to go deaf. But he continued to compose music and to lead the orchestra. He never got married.\n\nAfter his death in 1827, friends found love letters that he had written to someone he called “Immortal Beloved.” To be immortal means to live forever. “Beloved” is a way of saying you love someone. His lover’s name still remains a mystery.\n\nFor these reasons, and because of his wonderful music, he is remembered as a remarkable man in history. Perhaps no other composer has had such a large effect on the history of western music as Beethoven. ',
        url: '"---require(\'./lessons/lesson4/audio14.mp3\')---"',
        id: 1805078933466,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-14.mp3?_=4',
      },
      {
        topic: 'Art and Culture',
        title: 'A Nice Gift',
        content:
          'W: We’ve been invited to Lisa and Tom’s wedding in August, so we need to get them a present. Do you have any ideas about what to buy them?\n\nM: I don’t know. I’m not very good at buying gifts for people. What do you usually buy people for wedding gifts?\n\nW: I’d like to buy something that they have especially asked for. Most couples who are getting married go to several department stores and make a list of what they would like, and the stores put the list into a computer system. Then you can go and print out the list and choose something that they would like.\n\nM: Are Lisa and Tom registered somewhere?\n\nW: Yes, they are registered at two department stores. I’ve already printed out their list from one store.\n\nM: What have they asked for?\n\nW: Well, they have asked for different things for their new house. They would like towels, linens, decorations for the house, small appliances for the kitchen, china, silverware, crystal glasses, garden tools, and a patio set.\n\nM: Wow! That’s a lot of stuff, how should we decide what to get them?\n\nW: They have listed a coffee maker as one of the things they want, so why don’t we buy them a nice coffee maker?\n\nM: OK, how much is it?\n\nW: It’s forty dollars.\n\nM: Maybe we could get them some nice coffee cups and some coffee to go with it.\n\nW: That’s a great idea. I think that will make a lovely wedding present. ',
        url: '"---require(\'./lessons/lesson4/audio15.mp3\')---"',
        id: 7614832161675,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-15.mp3?_=5',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Collecting Stamps',
        content:
          'M: Hello, everyone. My name is Franklin. I’m the president of the Greenville Stamp Collecting Club. Many people ask me why stamp collecting is such a popular hobby. There are several reasons.\n\nFirst, stamp collecting is inexpensive. Most letters come with stamps on them. All you need to do is remove the stamp from the envelope. It’s true that nowadays we may not get as many letters as we used to. In that case, you might want to buy your first set of stamps. Stamp dealers often sell a lot of stamps for only three dollars!\n\nSecond, stamp collecting is educational. Stamps have pictures of everything from world leaders to endangered animals to various sports. It is interesting to learn about the people and things that are pictured on the stamps. It’s much more exciting than reading a boring history book.\n\nAlso, stamp collecting can help build friendships between people from around the world. Stamp collectors in India, for example, can build stamp-trading friendships with people from Mexico. They can learn about each other’s culture while they exchange stamps. \n\n',
        url: '"---require(\'./lessons/lesson4/audio16.mp3\')---"',
        id: 4501805251377,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-16.mp3?_=1',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Rock, Paper, Scissors',
        content:
          'G : Come on, Tony, let’s go to a movie tonight.\n\nB : We went to a movie on Saturday, Mary, but we haven’t gone bowling for a long time.\n\nG : I know, let’s play rock, paper, scissors to decide!\n\nB : Rock, paper, scissors? It sounds like an interesting sort of game! How do you play it?\n\nG : First, we each make a fist with our right hand, and then we shake our fists at the same time: one, two, three. On the count of three, you can keep your hand in a fist—that’s rock—or open your hand with the palm flat—that’s paper—or keep your fist, but put out your first and middle fingers—that’s scissors. The winner is the person who has the stronger item.\n\nB : That sounds stupid, because rocks are stronger than paper and scissors, so the rock will win every time.\n\nG : That’s true in real life, Tony, but that’s not how it works in this game. Rock can break scissors, but rock can be covered by paper, and paper can be cut by scissors. So rock defeats scissors, paper beats rock, and scissors beats paper.\n\nB : It’s interesting that each item in the game can defeat one other thing and lose to one other thing. I wonder who invented this game.\n\nG : I don’t know, but it’s played all over the world. There’s even a rock, paper, scissors world championship that has been held every year in Europe since 1934. \n\n ',
        url: '"---require(\'./lessons/lesson4/audio17.mp3\')---"',
        id: 7758161459592,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-17.mp3?_=2',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'Man’s Best Friend',
        content:
          'W: Why are dogs often called “man’s best friend?” Probably because dogs have many of the qualities we want in our human companions. They are loyal, friendly, never argue, and are always glad to see us. This is one reason why we have dogs and other pets. Sometimes we might even prefer the company of animals to that of fellow human beings.\n\nPets provide us with many other benefits as well. Studies have shown that having a pet nearby lowers the blood pressure of elderly people and raises their spirits. One study in Britain showed that people with pets recovered more quickly from heart attacks than those who didn’t have a pet. The study also found that pet owners suffered from fewer common ailments, such as colds, headaches, and fevers, than people who don’t own pets.\n\nPets help children to learn responsibility. By learning to take care of their pets, children learn how to take care of themselves and other people. Walking dogs each day gives children regular exercise.\n\nPets can also help keep us safe. Dogs, for example, guard our homes and scare away burglars. Guide dogs help blind people “see” when they need to go outside. Cats catch mice and rats in our houses.\n\nFinally, pets teach us compassion. They give us a chance to show our love to other living creatures. If we can love our pets, it becomes easier to love each other. And that might be the most important benefit of all! ',
        url: '"---require(\'./lessons/lesson4/audio18.mp3\')---"',
        id: 4988577782173,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-18.mp3?_=3',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'The Active Leisure Center',
        content:
          'M: Bored with nothing to do? Come and check out the Active Leisure Center. We offer something for everyone.\n\nThe center has a heated outdoor swimming pool with five different water slides for those who want some fun. There’s also an indoor pool with lanes for more serious swimmers. Swimming lessons are available for all levels.\n\nThe Active Leisure Center also has a fitness center for those who want to exercise. We have running machines, exercise bikes, weight machines and free weights, and daily aerobics and jazz dance classes. Our fitness experts will be happy to provide you with a fitness program to suit your needs.\n\nThe center has a sports hall where you can play indoor soccer, badminton, basketball, and various other sports. You can join community sports groups, sign up for tournaments, or just book the hall for you and your friends to use.\n\nWith the school holidays coming soon, why not come and find out about our special holiday programs? We have programs for all ages, from kindergarten to high school students, and if you join now, you can even get a family discount.\n\nSo come and take advantage of all that the Active Leisure Center has to offer. We’re open from six a.m. to ten p.m. on weekdays, and eight a.m. to eight p.m. on weekends. For more information, call 325-6188 or visit our website at www.activeleisure.com. ',
        url: '"---require(\'./lessons/lesson4/audio19.mp3\')---"',
        id: 6629368867779,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-19.mp3?_=4',
      },
      {
        topic: 'Leisure and Entertainment',
        title: 'The Audition',
        content:
          'B : Hi, Cindy. Are you ready for the big audition this afternoon?\n\nG : I don’t know, Greg. I’ve been practicing the script all week, but the princess has so many lines that I don’t know if I can remember them all!\n\nB : You don’t have to remember all of them for the audition, just the lines for the main scene, where the pirate meets the princess and tries to kidnap her.\n\nG : I know, but even in that scene, the princess has quite a few lines!\n\nB : You’ve got to think positive and have some confidence in yourself. I think that you’re going to get the part, and that you’ll be a fantastic princess!\n\nG : Well, I’m glad that somebody has confidence in me. I think I’m just worried that I’ll forget my lines. By the way, which part are you going to try out for?\n\nB : I’m trying out for the part of the pirate, the one who tries to steal the princess away from the prince.\n\nG : Oh yeah, the pirate and the prince get to have that cool sword fight in the final scene, and then the prince kills the pirate with his own sword!\n\nB : Yeah, I remember reading that in the script. But at the audition today, we’ll be practicing the scene where the pirate first sees the princess, and falls in love with her.\n\nG : Hey, I’ll help you practice your scene if you’ll help me practice mine.\n\nB : You’ve got a deal! Let’s start now. \n\n ',
        url: '"---require(\'./lessons/lesson4/audio20.mp3\')---"',
        id: 4628991167375,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-20.mp3?_=5',
      },
      {
        topic: 'School and Family',
        title: 'Add, Subtract, Multiply, and Divide',
        content:
          'B : Hello there, Terry. How are you doing?\n\nG : Not too well. I’m really having trouble figuring out this arithmetic assignment. I can add and subtract pretty well, but without a calculator it’s difficult for me to multiply and divide. Hey, Olaf, I heard that you’re excellent in math.\n\nB : My technique is that I try to imagine pictures in my mind, so the numbers aren’t just figures on a page, but something I can apply to real life. One way I do this is to imagine the numbers as if they were money. For example, if the equation is 753 minus 236, I think about seven dollars and 53 cents minus two dollars and 36 cents. It’s five dollars and 17 cents, or 517. Easy!\n\nG : Wow, that does seem easier, for adding and subtracting. But how do you apply this technique to multiplying and dividing?\n\nB : OK, suppose the equation is 200 times 30. 30 is three groups of 10. So, first I imagine 10 groups of people standing in a large field. Next to each group is a sign with the number 200 on it. At the front of the field is a huge sign with the number 2,000 on it, because 200 times 10 equals 2,000, right? But the problem requires 200 times 10 three times, so, I just add two more fields of people to my picture, with two more signs that say 2,000. Now I have 2,000 times three. The answer is 6,000! ',
        url: '"---require(\'./lessons/lesson4/audio21.mp3\')---"',
        id: 9788002070676,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-21.mp3?_=1',
      },
      {
        topic: 'School and Family',
        title: 'I Spy',
        content:
          'B : Dad, this is so boring, just sitting back here with nothing to do!\n\nM: Playing a game is a fun way to pass time on a long car trip.\n\nB : OK, but what kind of game can we play when we’re going 70 miles an hour in a car?\n\nM: Well, when I was young, we used to play a game in the car called “I Spy.” One person decides on an object that he or she can see, and tells us its color, then the rest of us have to ask yes-or-no questions to try and find out what it is.\n\nG : I’ll go first, and I spy something that’s. . .\n\nB : Hey, I wanted to go first!\n\nM: Billy, let your sister begin. Remember, it’s considered good manners to let girls and\n\nyounger children have their turn ahead of us.\n\nG : Yeah, remember your manners, stupid!\n\nM: Betsy, it’s also good manners to treat each other with respect, and not to call people names. I think you need to apologize to your brother.\n\nG : I’m sorry, Billy. Let’s start, OK? I spy something small and green, it’s on the steering wheel, and. . .\n\nB : Stop, Betsy! Dad said that you’re only supposed to tell us its color, not its size or location or anything else.\n\nG : Oh no, I forgot!\n\nM: That’s OK, honey, everybody makes mistakes. Remember the saying: “If at first you don’t succeed, try, try again.”\n\nG : OK, let me try again. I spy something. . . ',
        url: '"---require(\'./lessons/lesson4/audio22.mp3\')---"',
        id: 1522445075671,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-22.mp3?_=2',
      },
      {
        topic: 'School and Family',
        title: 'American Families Today',
        content:
          'W: American families today are very different from what they were about a hundred years ago. The main difference is that families are now much smaller. In the past, most families lived on farms. They needed children to help them work. ',
        url: '"---require(\'./lessons/lesson4/audio23.mp3\')---"',
        id: 1890738521109,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-23.mp3?_=3',
      },
      {
        topic: 'School and Family',
        title: 'Making Decisions',
        content:
          'G : How does your family make important decisions? Do children have any say in making these decisions, or do parents simply tell them what to do? There are several different methods for making family decisions.\n\nOne method is to have a vote. Each family member writes his or her own choice on a piece of paper. With this method, each person gets equal say in the issue being decided. What if the vote is a tie? You should think of an idea to break a tie before you vote.\n\nA second method is to give older children special privileges. If you’re moving into a new home, for instance, the oldest child might get first choice of bedrooms.\n\nA third method is to take turns making the decisions. Suppose a family goes on vacation together each year. One year they might let their daughter decide where they should go. The next year, the choice goes to the son. ',
        url: '"---require(\'./lessons/lesson4/audio24.mp3\')---"',
        id: 979740218736,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-24.mp3?_=4',
      },
      {
        topic: 'School and Family',
        title: 'My Favorite Teacher',
        content:
          'M: The best teacher I’ve ever had was Mr. Lambert, my high school French teacher. He was short, with dark hair, a thick beard, and a big smile. His legs were short, too, so his arms always looked too long. He was a very good teacher because he always brought so much energy to the classroom. His classes were never boring because he was always active, trying to find new methods to communicate ideas. Because he taught French, English wasn’t allowed in class, so he often had to demonstrate the meaning of new words through gestures and acting.\n\nOnce, he had to communicate the word “above” without saying it in English. First, he pulled a desk near the blackboard, and then put a wastebasket between the desk and the blackboard. Next, he put his feet on the edge of the blackboard and his hands on the desk so that he was above the wastebasket. I’ve never forgotten that demonstration. It was difficult not to enjoy the subject when he was so excited about teaching it.\n\nThe most important reason that Mr. Lambert is the best teacher I’ve ever had is that he loved all his students, even when we made him angry by speaking English in class. Whenever that happened, the students always felt guilty because they had so much respect for him. Now that I’m a teacher, I try my best to be like Mr. Lambert. He is my role model. ',
        url: '"---require(\'./lessons/lesson4/audio25.mp3\')---"',
        id: 6554429732007,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-25.mp3?_=5',
      },
      {
        topic: 'People and Work',
        title: 'Meet Debra',
        content:
          'W: Hi! My name is Debra Garrel. I’m a 20-year-old communications major at New York\n\nUniversity. I love being at university. I’m enjoying my courses and I meet many new people every day. It seems like a new adventure, and I love adventures!\n\nI spent my childhood traveling all over the world and learning about different cultures. You see, my father works for the World Bank, so our family has always moved around a lot. I’ve lived in Mongolia, East Timor, Brazil, Nigeria, the Netherlands, and the United States. The hardest part of growing up was saying goodbye each time we had to move. But I would always remind myself that I would make new friends soon, and I always did. I’ve learned not to be shy!\n\nAfter leaving one place, I would always email or call my old friends. I would tell them about the new adventures I was having, and ask them about new things in their lives. That is probably the reason I chose to major in communications. I like to keep in touch.\n\nIt’s obvious that I love to travel, isn’t it? But I also enjoy dancing, reading, going to the theater, and riding horses. If you share any of these interests and would like to learn more about me, please let me know. And if you have different interests, I’ll remind you: I’m always looking for a new adventure! ',
        url: '"---require(\'./lessons/lesson4/audio26.mp3\')---"',
        id: 3872281849611,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-26.mp3?_=1',
      },
      {
        topic: 'People and Work',
        title: 'What’s in a Name?',
        content:
          'W: Sy, do you have a local driver’s license that we can rent the car with for our trip this weekend?\n\nM: Sure, Jen, here you are.\n\nW: It says here that your name is Sarang Patel, but I thought your first name was Sy!\n\nM: Sy is my nickname, and Sarang is my given name. It means “navigator” in Hindi. At the time I was born, things were confusing and difficult for my family in India. My parents wanted a son who could lead and guide our family to success. ',
        url: '"---require(\'./lessons/lesson4/audio27.mp3\')---"',
        id: 9237448929908,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-27.mp3?_=2',
      },
      {
        topic: 'People and Work',
        title: 'The Right Career',
        content:
          'B : People need to consider important factors when choosing a career. In my opinion, the most important factor is to choose a job that goes well with your personality. Are you an outgoing person who loves meeting new people and talking to them? Perhaps you should become a tour guide or a teacher. Are you shy? Maybe you should be an accountant or a scientist. ',
        url: '"---require(\'./lessons/lesson4/audio28.mp3\')---"',
        id: 8309672003685,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-28.mp3?_=3',
      },
      {
        topic: 'People and Work',
        title: 'Body Language',
        content:
          'G : Did you know that words are not the only thing we use to communicate? Most of our messages are sent through body language. Only about 10 percent of communication is done through the actual words of a conversation. Isn’t that strange? If we understand body language well, we can learn a lot more about what other people really think. We can also use body language to send the right message to others. Have you ever felt dislike for someone without knowing why? Well, he or she might have been sending out a negative message through body language.\n\nWhat kind of things should you look for if you want to understand body language? First, look at people’s eyes. If people are lying, they may not look directly at the person they are talking to, and the pupils of their eyes may shrink. Next, look at people’s arms. Arms crossed in front of the body might mean a person is unfriendly or afraid. He or she might be trying to say, “Stay away.” If the arms are by the side or at the back of the body, the person might be saying, “Come closer. I won’t hurt you.” But keep in mind that there is no accurate way to interpret body language all the time. Sometimes, talking is still the best way to communicate. However, knowing about body language will improve the way you communicate and help you understand other people better. ',
        url: '"---require(\'./lessons/lesson4/audio29.mp3\')---"',
        id: 7603373032909,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-29.mp3?_=4',
      },
      {
        topic: 'People and Work',
        title: 'Veterinarians',
        content:
          'M: If you like animals and science, you might want to be a veterinarian. Veterinarians are animal doctors. They take care of sick and injured animals. Like doctors, vets perform surgery and give medicine. ',
        url: '"---require(\'./lessons/lesson4/audio30.mp3\')---"',
        id: 1304540423999,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-30.mp3?_=5',
      },
      {
        topic: 'Sports and Health',
        title: 'I Feel Awful!',
        content:
          'B : Mom, I feel awful, I think I’d better stay home from school today.\n\nW: I’m sorry you’re not feeling well. What’s the problem?\n\nB : I have a stomachache, my head hurts, and I have a sore throat.\n\nW: Well, we’d better take your temperature and make sure you don’t have a fever. Keep this thermometer under your tongue for a minute or two. Remind me to call your teacher and tell her you’re sick later on today. All right, let’s check. Oh dear, you’ve got a fever. Your temperature is 103, so I think we need to give Dr. Thompson a call. ',
        url: '"---require(\'./lessons/lesson4/audio31.mp3\')---"',
        id: 352586303202,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-31.mp3?_=1',
      },
      {
        topic: 'Sports and Health',
        title: 'Why Do We Sneeze?',
        content:
          'G : A sneeze is a very interesting thing. We use many different muscles when we sneeze. These include stomach muscles, throat muscles, and eye muscles. Remember, our eyes always close during a sneeze.\n\nA sneeze begins when something gets inside your nose, like a tiny particle of dust. Your nose sends a message to your brain. Your brain sends messages to the muscles, getting them to work together in the correct order. When you sneeze, the dust that was in your nose flies out as fast as 100 miles an hour! Usually something like dust or cold air makes us sneeze, but some people sneeze whenever they look at the sun. Some people think that your heart stops when you sneeze. Actually, it really doesn’t, but sometimes it\n\nmight feel like it does.\n\nAfter someone sneezes, people often say “Bless you,” or “God bless you.” To bless someone means to wish them good and special things. Why do people say this? Long ago, people believed that this saying kept bad things from flying down your throat. Another story is that people thought this saying would help keep the person who sneezed from getting a very serious disease called the plague. At that time, the plague was killing thousands of people. It was thought that saying “God bless you” would protect people from getting this awful disease. Today, the saying is simply a nice way to wish someone well. ',
        url: '"---require(\'./lessons/lesson4/audio32.mp3\')---"',
        id: 1220670680501,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-32.mp3?_=2',
      },
      {
        topic: 'Sports and Health',
        title: 'Skiing and Snowboarding',
        content:
          'B : My name is Michael Bryce, and I love to ski and snowboard. I am 16 years old, and I have been skiing since I was five, and snowboarding since I was eight. Both my parents like skiing, and my older brother likes snowboarding.\n\nIn my opinion, snowboarding is more fun and exciting than skiing. When I ski, it feels really easy to control where I go and how I move. The ski poles make it very simple to change my direction. There are no poles in snowboarding, however, so when you snowboard, you have to understand the snow very well to make sure you don’t fall. The feeling I get while I’m snowboarding is more exciting than when I’m skiing, because I like having less control. I enjoy the challenge. I never know what’s going to happen. This makes it more exciting!\n\nSome people think that the reduced amount of control in snowboarding makes the sport more dangerous. But in my opinion, snowboarding is actually safer than skiing, because when you ski, you are standing on two skis. If you fall while on skis, it is very easy to break your bones by getting your skis stuck in the snow. On a snowboard, your legs stay together even when you fall. While I still love to ski, I like snowboarding much better. It is more fun and exciting, and maybe even safer, than skiing. ',
        url: '"---require(\'./lessons/lesson4/audio33.mp3\')---"',
        id: 8120914406691,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-33.mp3?_=3',
      },
      {
        topic: 'Sports and Health',
        title: 'A Nice Cup of Tea',
        content:
          'M: Could I offer you a cup of tea?\n\nW: Yes, thank you very much. What kind do you have?\n\nM: I have Earl Grey, English Breakfast, Irish Breakfast, and Darjeeling.\n\nW: Those are all black teas. Do you have any green tea?\n\nM: I’m sorry, I don’t really like green tea. ',
        url: '"---require(\'./lessons/lesson4/audio34.mp3\')---"',
        id: 8154413238088,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-34.mp3?_=4',
      },
      {
        topic: 'Sports and Health',
        title: 'The Injury',
        content:
          'B : I’ve just returned from the doctor’s office, and he told me that because of my injury I will have to miss the next two weeks of basketball. I’m really disappointed! Last night, I hurt my ankle during a very exciting game against West High School. It was five minutes before the end of the game, the score was 60-60, I had the ball, and I heard my coach shouting at me to shoot.\n\nSo I started to jump, but suddenly I found myself lying flat on my back on the court! A West High player had accidentally knocked me down. I tried to stand up, but my ankle hurt so much that I was unable to walk. Two of my teammates had to help me leave the court. My ankle started to swell up, so the team doctor brought me a bag of ice to put on it. The ice was cold, but it felt good on my ankle. ',
        url: '"---require(\'./lessons/lesson4/audio35.mp3\')---"',
        id: 6969582185204,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-35.mp3?_=5',
      },
      {
        topic: 'Travel and Transport',
        title: 'Moving',
        content:
          'M: Hey, Sheena! I haven’t seen you for ages. What’s new? Where are you going with all those suitcases?\n\nW: Hi Mark, it’s been a while since the last time we ran into each other! I’m bringing these suitcases home to pack because my family is preparing to move across the bay to Port Anderson.\n\nM: Really? How are you going to transport all your furniture?\n\nW: I’m not sure. I considered hiring a moving van, but someone told me it might be more convenient to rent a huge container and ship everything across. The details are a bit complicated because we’ve got so many boxes!\n\nM: Well, when my sister and brother-in-law moved to Dallas last year, they sent all their furniture and heavy items by cargo flight. They hauled it there on a massive cargo plane, then rented a truck and picked it up at the airport after they arrived.\n\nW: That’s interesting, but the problem is that we have so much junk, we might need two cargo planes!\n\nM: Well, however you get it there, it sounds like you’ll need help once you get it to the other side. I’ve got a friend there who owns a self-serve truck company. He can rent you a truck at a discount rate. Which day are you moving?\n\nW: Next Saturday.\n\nM: I’m free that day, so I’ll help you out! I’ve still got my small truck, so I can haul some stuff for you, too.\n\nW: Thanks, Mark. That would be great! ',
        url: '"---require(\'./lessons/lesson4/audio36.mp3\')---"',
        id: 5969081957262,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-36.mp3?_=1',
      },
      {
        topic: 'Travel and Transport',
        title: 'Wear Your Seat Belt!',
        content:
          'G : Some people think the government should require passengers by law to wear seat belts in cars and taxis. They say that seat belts save lives and money. Statistics show that 60 percent of people killed in car accidents were not wearing seat belts. Statistics also show that most people who wear seat belts survive. In the past 30 years, seat belts have saved almost $600 billion in medical costs. The average car accident costs $820 for each person in the United States. Some states require people to wear seat belts. In those states, about 80 percent of the passengers follow the law.\n\nHowever, other people think it’s wrong to require seat belt use by law. They say that passengers should decide for themselves. Many of these people agree that seat belts save lives, but they don’t think the government has the right to force people to wear them. They point out that smoking cigarettes is also unhealthy. But the government lets adults smoke if they want to. Leaders cannot force people to do what’s good, they argue. It’s better to educate people so they will want to wear seat belts.\n\nThose who want seat belt laws say that the right to public safety is more important than\n\nthe individual’s right to free choice. But their opponents say people must be careful to protect their individual rights. They should decide how to live their lives, not the government. What is your opinion on this? ',
        url: '"---require(\'./lessons/lesson4/audio37.mp3\')---"',
        id: 9713205194229,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-37.mp3?_=2',
      },
      {
        topic: 'Travel and Transport',
        title: 'Going on Vacation',
        content:
          'W: Hey, Carl, I’m surprised to see you here! Jeremy told me that you were on vacation.\n\nM: Hi, Shelly. We were visiting some relatives in Sydney, but we returned last night.\n\nW: Oh, I’ve wanted to go to Australia ever since I was little! Tell me what it was like.\n\nM: It was fantastic! We fed kangaroos, walked through rainforests, and swam in the ocean. What was really great was when we took a train to Brisbane to see the Great Barrier Reef.\n\nW: I’ve heard that flights to Australia are pretty expensive. ',
        url: '"---require(\'./lessons/lesson4/audio38.mp3\')---"',
        id: 9839090386531,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-38.mp3?_=3',
      },
      {
        topic: 'Travel and Transport',
        title: 'Traveling by Airplane',
        content:
          'B : Airplane travelers can choose between three kinds of tickets: first class, business class, and economy class. Most people buy economy class tickets. They are cheaper, so travelers can go to more places more often. Business class is more expensive, with good seats and good service. First class is very expensive, but offers very comfortable seats and excellent service.\n\nIn economy class, the seats are small and close together. There is not much leg room. In first class, the seats are huge and wider apart. There is lots of room for passengers to stretch their legs. Economy class passengers usually must all watch the same movie. First class passengers have their own TVs, and each person can watch different movies. Economy class passengers eat cheaper food. First class passengers are served delicious, fresh food. It is difficult to sleep in economy class because of the small seats and all the noise. In first class, the large seats can be pushed back to make a comfortable bed. There is a curtain between sections, so it is nice and quiet.\n\nEconomy class is a good choice for short flights within the same country. Business class or first class is a good choice for business travelers taking an international flight across an ocean. These people often have to get off the plane and go right to work. For them, it is important to arrive fresh, rested, and ready for a full, exciting day. \n\n',
        url: '"---require(\'./lessons/lesson4/audio39.mp3\')---"',
        id: 7967406976722,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-39.mp3?_=4',
      },
      {
        topic: 'Travel and Transport',
        title: 'A Family Cruise',
        content:
          'G : Family Cruise Line is offering a new, exciting cruise that the whole family can enjoy! We have a special deal for families all year round on our Family Caribbean Cruise. This special one-week cruise leaves from Miami, Florida and stops at six fantastic Caribbean islands. There is so much for the entire family to see and do!\n\nOn board, we have a variety of great food for breakfast, lunch, and dinner. We also have lots of interesting and fun activities. There are music and dance shows every evening. We have a movie theater and a KTV bar. For kids, we have shows each day with their favorite TV friends like Mickey Mouse, Goofy, and Elmo. Playing with television characters isn’t the only activity children will enjoy. They can play volleyball, swim in one of our three huge pools, or take dancing and art classes. There’s so much variety, the kids can try a new activity each day. Mom and Dad can join them, or rest in lounge chairs on our wide ship deck. \n\n',
        url: '"---require(\'./lessons/lesson4/audio40.mp3\')---"',
        id: 1183945880286,
        src: 'https://english-practice.net/wp-content/uploads/2022/01/listening-practice-through-dictation-4-40.mp3?_=5',
      },
    ],
  },
];

const getLesson = (id: number) => {
  return lessons.find(item => item.id === id);
};

const getUnit = (lessonId: number, unitId: number) => {
  const lesson = lessons.find(item => item.id === lessonId);
  return lesson?.units.find(item => item.id === unitId);
};

const insetDataSeed = async () => {
  const dataCurrent = await find({ search: '' });
  if (dataCurrent?.length) return;
  const data: IAudio[] = [];
  lessons.forEach(({ units, id }) => {
    units.forEach(({ title, topic, src, content }) => {
      data.push({
        name: title,
        topic,
        path: src,
        transcript: content,
        duration: 0,
        type: AUDIO_FILE_TYPE.URL,
        listen_number: 0,
        level: id,
      });
    });
  });

  await insertMany(data);
};

export { lessons, getLesson, getUnit, insetDataSeed };
