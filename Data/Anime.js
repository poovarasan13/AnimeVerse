import narutoImage from '../assets/images/naurto1.png';
import kakashiImage from '../assets/images/kakashi1.png';
import sasukeImage from '../assets/images/sasuke.png';
import obitoImage from '../assets/images/obito.png';
import borutoImage from '../assets/images/boruto.png';
import itachiImage from '../assets/images/itachi.png';
const data= [
      {
        "id": 1,
        "name": {
          "first": "Naruto",
          "last": "Uzumaki",
          "aliases": ["Number One Hyperactive Knucklehead Ninja", "Seventh Hokage"],
          "japanese": "うずまき ナルト",
          "romaji": "Uzumaki Naruto"
        },
        "popular":true,
        "image":narutoImage,
        "biographical": {
          "birth_date": "October 10",
          "age": {
            "part_1": "12-13",
            "part_2": "15-17",
            "hokage": "32-33"
          },
          "gender": "Male",
          "species": "Human (Jinchūriki)",
          "height": {
            "part_1": "147.5 cm",
            "part_2": "166 cm",
            "hokage": "180 cm"
          },
          "affiliation": "Konohagakure",
          "team": "Team 7",
          "rank": "Hokage"
        },
        "abilities": {
          "signature_jutsu": ["Rasengan", "Shadow Clone Jutsu", "Sage Mode"],
          "jinchūriki": "Kurama (Nine-Tails)"
        },
        "voice_actors": {
          "japanese": "Junko Takeuchi",
          "english": "Maile Flanagan"
        }
      },
      {
        "id": 2,
        "name": {
          "first": "Kakashi",
          "last": "Hatake",
          "aliases": ["Copy Ninja", "Sharingan Kakashi", "Sixth Hokage"],
          "japanese": "はたけ カカシ",
          "romaji": "Hatake Kakashi"
        },
        "popular":true,
        "image":kakashiImage,
        "biographical": {
          "birth_date": "September 15",
          "age": {
            "part_1": "26-27",
            "part_2": "29-31",
            "hokage": "46-47"
          },
          "gender": "Male",
          "species": "Human",
          "height": {
            "part_1": "181 cm",
            "hokage": "181 cm"
          },
          "affiliation": "Konohagakure",
          "team": "Team 7 (Leader)",
          "rank": "Sixth Hokage"
        },
        "abilities": {
          "signature_jutsu": ["Chidori", "Raikiri", "Kamui", "Sharingan (former)"],
          "notable_traits": [
            "Sharingan (formerly)",
            "Master of 1,000 jutsu",
            "Anbu background"
          ]
        },
        "voice_actors": {
          "japanese": "Kazuhiko Inoue",
          "english": "Dave Wittenberg"
        }
      },
      {
        "id": 3,
        "name": {
          "first": "Sasuke",
          "last": "Uchiha",
          "aliases": ["Last Uchiha", "Avenger", "Shadow Hokage"],
          "japanese": "うちは サスケ",
          "romaji": "Uchiha Sasuke"
        },
        "image": sasukeImage,
        "biographical": {
          "birth_date": "July 23",
          "age": {
            "part_1": "12-13",
            "part_2": "15-17",
            "blank_period": "19-21",
            "adulthood": "32-33"
          },
          "gender": "Male",
          "species": "Human (Sharingan/Rinnegan user)",
          "height": {
            "part_1": "153 cm",
            "part_2": "168 cm",
            "adulthood": "182 cm"
          },
          "affiliation": "Konohagakure (formerly Rogue Ninja)",
          "team": "Team 7 (Formerly), Taka",
          "rank": "Genin (officially), Shadow Hokage"
        },
        "abilities": {
          "signature_jutsu": [
            "Chidori",
            "Amaterasu",
            "Susanoo",
            "Rinnegan abilities"
          ],
          "dojutsu": [
            "Sharingan",
            "Mangekyō Sharingan",
            "Eternal Mangekyō Sharingan",
            "Rinnegan"
          ],
          "notable_traits": [
            "Last surviving Uchiha (after Itachi's death)",
            "Prodigy",
            "Chidori variant creator"
          ]
        },
        "voice_actors": {
          "japanese": "Noriaki Sugiyama",
          "english": "Yuri Lowenthal"
        }
      },
      {
        "id": 5,
        "name": {
          "first": "Obito",
          "last": "Uchiha",
          "aliases": ["Tobi", "Madara Uchiha (impersonator)", "The Masked Man"],
          "japanese": "うちは オビト",
          "romaji": "Uchiha Obito"
        },
        "popular":true,
        "image": obitoImage,
        "biographical": {
          "birth_date": "February 10",
          "age": {
            "part_1": "13-14",
            "part_2": "30-31 (death)"
          },
          "gender": "Male",
          "species": "Human (Uchiha Clan, Zetsu-enhanced)",
          "height": {
            "part_1": "154 cm",
            "adulthood": "182 cm"
          },
          "affiliation": "Akatsuki (Leader), Konoha (formerly)",
          "team": "Team Minato (with Kakashi & Rin)",
          "rank": "Jōnin-level (post-Kamui)"
        },
        "abilities": {
          "signature_jutsu": [
            "Kamui (space-time ninjutsu)",
            "Izanagi",
            "Fire Release: Blast Wave Wild Dance"
          ],
          "dojutsu": [
            "Sharingan",
            "Mangekyō Sharingan",
            "Rinnegan (one eye)"
          ],
          "notable_traits": [
            "Manipulated the Fourth Great Ninja War",
            "Ten-Tails Jinchūriki (temporarily)",
            "Rin's death triggered his fall"
          ]
        },
        "voice_actors": {
          "japanese": "Wataru Takagi (young), Naoya Uchida (adult)",
          "english": "Michael Yurchak (young), Vic Mignogna (adult)"
        }
      },
    
      // Boruto Uzumaki (NEW)
      {
        "id": 6,
        "name": {
          "first": "Boruto",
          "last": "Uzumaki",
          "aliases": ["The Scientific Ninja", "Naruto's Son", "Karma Bearer"],
          "japanese": "うずまき ボルト",
          "romaji": "Uzumaki Boruto"
        },
        "image": borutoImage,
        "biographical": {
          "birth_date": "March 27",
          "age": {
            "academy": "8-12",
            "genin": "12-13",
            "current": "16+"
          },
          "gender": "Male",
          "species": "Human (Hyūga-Uzumaki hybrid)",
          "height": {
            "genin": "145 cm",
            "current": "165 cm+"
          },
          "affiliation": "Konohagakure",
          "team": "Team 7 (Leader: Konohamaru)",
          "rank": "Genin (technically), Chunin-level skill"
        },
        "abilities": {
          "signature_jutsu": [
            "Vanishing Rasengan",
            "Lightning Release: Thunderclap Arrow",
            "Karma (Momoshiki's power)"
          ],
          "dojutsu": [
            "Jōgan (anime-only, mysterious eye)"
          ],
          "notable_traits": [
            "Can absorb ninjutsu via Karma",
            "Genius intellect (surpasses kid Naruto)",
            "Uses high-tech ninja tools"
          ]
        },
        "voice_actors": {
          "japanese": "Yūko Sanpei",
          "english": "Amanda Céline Miller"
        }
      }
    ]

export default data;