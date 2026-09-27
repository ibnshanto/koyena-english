export const topics = [
  {
    id: "sentence-structure",
    name: "Sentence Structure",
    subtitle: "Simple, compound, complex sentences",
    hasContent: true,
    videoUrl: null,
    transformFormat: true,
    lesson: {
      intro: "Think of sentence structure as the skeleton of everything you write or say. Native speakers don't consciously think 'I am now using a complex sentence' — but they unconsciously combine short, simple ideas into longer, more sophisticated ones to sound natural and avoid choppy, robotic speech. If you only ever use simple sentences, you'll sound like a beginner even with perfect grammar. If you glue sentences together incorrectly, you'll create run-ons and fragments that confuse the reader. Mastering structure is really about mastering how ideas connect to each other.",
      sections: [
        {
          title: "The Three Core Sentence Types",
          rules: [
            {
              title: "Simple Sentences — One Complete Idea",
              body: "A simple sentence has exactly one independent clause: one subject, one main verb, one complete thought. It can still be long (with extra description), but structurally it's still just one clause.",
              examples: ["✅ She studies every evening. (correct — one clause)", "✅ The tired old dog slept quietly by the fire all afternoon. (still simple — one subject, one verb, just more description)", "❌ She studies every evening she wants good grades. (incorrect — two clauses squeezed into one with no connector)"]
            },
            {
              title: "Compound Sentences — Two Equal Ideas Joined",
              body: "A compound sentence joins two independent clauses of EQUAL importance using a coordinating conjunction (for, and, nor, but, or, yet, so — remember 'FANBOYS') or a semicolon.",
              examples: ["✅ She studies every evening, and she reviews her notes on weekends.", "✅ The train arrived late; passengers were frustrated.", "❌ She studies every evening, she reviews her notes on weekends. (missing conjunction — this is a comma splice)"]
            },
            {
              title: "Complex Sentences — One Main Idea, One Supporting Idea",
              body: "A complex sentence has one independent clause (can stand alone) plus one or more dependent clauses (cannot stand alone), connected by a subordinating conjunction (because, although, since, if, when, while).",
              examples: ["✅ Although she was tired, she kept studying. (dependent + independent)", "✅ She kept studying because the exam was important. (independent + dependent)", "❌ Although she was tired. (incorrect — a dependent clause alone is a fragment, not a full sentence)"]
            }
          ]
        },
        {
          title: "The Two Classic Structural Errors",
          rules: [
            {
              title: "Run-on Sentences & Comma Splices",
              body: "A run-on happens when two independent clauses are joined with no punctuation or connector at all. A comma splice is a specific type of run-on where only a comma (no conjunction) tries to do the job.",
              examples: ["❌ She studies hard she wants to pass. (run-on, no punctuation at all)", "❌ She studies hard, she wants to pass. (comma splice — comma alone isn't enough)", "✅ She studies hard because she wants to pass. (fixed with a subordinating conjunction)", "✅ She studies hard; she wants to pass. (fixed with a semicolon)"]
            },
            {
              title: "Sentence Fragments",
              body: "A fragment is an incomplete thought punctuated as if it were a complete sentence — usually a dependent clause standing alone, or a phrase missing a subject or verb.",
              examples: ["❌ Because she was tired. (fragment — dependent clause with nowhere to attach)", "✅ She stopped working because she was tired. (fixed — attached to an independent clause)", "❌ Running quickly to catch the bus. (fragment — no clear subject/main verb)", "✅ She was running quickly to catch the bus. (fixed — now has a subject and main verb)"]
            }
          ]
        },
        {
          title: "Independent & Dependent Clauses — The Building Blocks",
          rules: [
            {
              title: "Independent Clauses Can Stand Alone",
              body: "An independent clause has a subject and a verb and expresses a complete thought — it could be its own sentence.",
              examples: ["✅ She studies every evening. (complete on its own)", "✅ He runs around the park. (complete on its own)"]
            },
            {
              title: "Dependent Clauses Cannot Stand Alone",
              body: "A dependent clause also has a subject and a verb, but it starts with a word (because, although, if, when, since, who, which, that) that makes it incomplete — it depends on an independent clause to make sense.",
              examples: ["❌ Because she was tired. (has subject + verb, but still incomplete — you're left asking 'so what?')", "✅ Because she was tired, she went to bed early. (now attached to an independent clause)", "❌ Who shouted at me. (dependent — needs to attach: 'That's the guy who shouted at me.')"]
            }
          ]
        },
        {
          title: "Verb Complements — What Needs to Come Next?",
          rules: [
            {
              title: "Many Verbs Need a Complement to Feel Complete",
              body: "A complement is whatever comes after a verb to complete its meaning — it can be a noun, gerund, infinitive, adjective, or adverb. Some verbs (like 'like' or 'want') are grammatically fine alone, but sound unfinished without one.",
              examples: ["❌ She likes. (grammatically odd — likes what?)", "✅ She likes strawberries. (noun complement)", "✅ She likes swimming. (gerund complement)", "✅ She likes to swim. (infinitive complement)", "❌ He wants. → ✅ He wants a new car."]
            },
            {
              title: "Complements Can Chain Together",
              body: "Sometimes one complement introduces a word that itself needs another complement, creating a longer, fully-formed sentence one piece at a time.",
              examples: ["She likes getting up (needs more) → before the sun rises. (now complete)", "Adding adjectives or adverbs adds detail, but does NOT fix an incomplete sentence — only a complement can do that."]
            }
          ]
        },
        {
          title: "Transforming Sentences: Simple ↔ Compound ↔ Complex",
          rules: [
            {
              title: "Simple → Compound (Join Two Equal Ideas)",
              body: "Take two related simple sentences and join them with a coordinating conjunction (FANBOYS) or a semicolon.",
              examples: ["Simple: She studies every evening. + She wants good grades. → Compound: She studies every evening, for she wants good grades.", "Simple: He runs every morning. + He stays fit. → Compound: He runs every morning, so he stays fit."]
            },
            {
              title: "Simple → Complex (Add a Dependent Clause)",
              body: "Turn one of the two simple sentences into a dependent clause using a subordinating conjunction, then attach it to the other (still-independent) sentence.",
              examples: ["Simple: She wants good grades. She studies every evening. → Complex: Because she wants good grades, she studies every evening.", "Simple: He was tired. He kept working. → Complex: Although he was tired, he kept working."]
            },
            {
              title: "Compound → Complex (Upgrade the Connector)",
              body: "Change the coordinating conjunction to a subordinating conjunction, turning one clause from independent to dependent — this often makes the relationship between the ideas clearer.",
              examples: ["Compound: He was tired, but he kept working. → Complex: Although he was tired, he kept working.", "Compound: She studied hard, so she passed. → Complex: Because she studied hard, she passed."]
            },
            {
              title: "Complex → Compound (Downgrade the Connector)",
              body: "Change the subordinating conjunction to a coordinating conjunction, making both clauses independent and equal in weight.",
              examples: ["Complex: Although she was tired, she kept working. → Compound: She was tired, but she kept working.", "Complex: Because he studied hard, he passed. → Compound: He studied hard, so he passed."]
            },
            {
              title: "Combining Several Simple Sentences Into One Complex/Compound Sentence",
              body: "Skilled writing often merges 2-3 short simple sentences into one longer sentence using a mix of coordinating and subordinating conjunctions — this avoids a choppy, robotic feel while staying readable.",
              examples: ["Simple: She works in a private zoo. She knows a lot about animals. She studied economics at university.", "Combined: She works in a private zoo, so she must know a lot about animals, although she studied economics at university."]
            }
          ]
        },
        {
          title: "Advanced Structures for Fluency",
          rules: [
            {
              title: "Inversion for Emphasis",
              body: "Starting a sentence with certain negative or limiting adverbs (not only, hardly, rarely, never, no sooner) requires flipping the normal subject-verb order — this is a hallmark of advanced, formal English.",
              examples: ["✅ Not only did she pass, but she also got the highest score. (inverted: auxiliary before subject)", "❌ Not only she passed, but she also got the highest score. (incorrect — no inversion)", "✅ Hardly had I arrived when the meeting started.", "❌ Hardly I had arrived when the meeting started."]
            },
            {
              title: "Parallel Structure",
              body: "When listing or comparing items in a sentence, every item must use the SAME grammatical form. Mixing forms is a very common, very noticeable error.",
              examples: ["✅ She likes reading, writing, and swimming. (all -ing forms — parallel)", "❌ She likes reading, to write, and swimming. (mixed forms — not parallel)", "✅ The job requires someone who is organized, reliable, and hardworking. (all adjectives)", "❌ The job requires someone who is organized, reliable, and works hard. (mixed adjective + verb phrase)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ She studies hard, she wants to pass. → ✅ She studies hard because she wants to pass. (comma splice)",
        "❌ Because she was late. → ✅ She missed the bus because she was late. (fragment)",
        "❌ She likes reading, to write, and swimming. → ✅ She likes reading, writing, and swimming. (parallel structure)",
        "❌ Not only she passed but also... → ✅ Not only did she pass but also... (inversion after 'not only')",
        "❌ The team is talented, hardworking and they never give up. → ✅ The team is talented, hardworking, and persistent. (keep the list parallel)"
      ],
      decisionTree: [
        "1. Does the sentence have only one independent clause? → Simple sentence",
        "2. Are there two independent clauses joined by and/but/or/so, or a semicolon? → Compound sentence",
        "3. Is there one independent clause plus a dependent clause (because/although/if)? → Complex sentence",
        "4. Are two independent clauses joined with only a comma and no conjunction? → Comma splice — fix with a conjunction, semicolon, or period",
        "5. Is the sentence missing a subject or complete verb, or is it just a dependent clause alone? → Fragment — attach it to a complete independent clause",
        "6. Does the sentence start with 'not only', 'hardly', 'never', or 'no sooner'? → Invert the subject and auxiliary verb",
        "7. Are you listing 3+ items or comparing things? → Make sure every item uses the identical grammatical form"
      ],
      quickCheck: [
        { q: "She studies every evening. (simple/compound/complex?)", a: "simple", why: "one independent clause only, no connector needed." },
        { q: "Although tired, she kept working. (simple/compound/complex?)", a: "complex", why: "dependent clause (although tired) + independent clause." },
        { q: "Combine into a COMPOUND sentence: 'He studied hard.' + 'He passed the exam.'", a: "He studied hard, so he passed the exam.", why: "two equal independent clauses joined with a coordinating conjunction." },
        { q: "Combine into a COMPLEX sentence: 'She was tired.' + 'She kept studying.'", a: "Although she was tired, she kept studying.", why: "one clause becomes dependent using a subordinating conjunction." },
        { q: "Change this COMPOUND sentence to COMPLEX: 'He was late, so he missed the bus.'", a: "Because he was late, he missed the bus.", why: "the coordinating conjunction 'so' is replaced with the subordinating conjunction 'because'." },
        { q: "Change this COMPLEX sentence to COMPOUND: 'Because it was raining, we stayed inside.'", a: "It was raining, so we stayed inside.", why: "the subordinating conjunction 'because' is replaced with the coordinating conjunction 'so'." }
      ]
    }
  },
  {
    id: "nouns",
    name: "Nouns",
    subtitle: "Countable, uncountable, plurals, and meaning shifts",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Nouns are the 'who' and 'what' of every sentence. Native speakers instinctively know you can say 'three books' but never 'three furnitures' — this countable vs uncountable distinction trips up learners constantly because it doesn't map neatly onto other languages. Master this one distinction, plus how plurals are spelled, and most noun errors disappear.",
      sections: [
        {
          title: "Countable vs Uncountable Nouns",
          rules: [
            {
              title: "Countable Nouns",
              body: "Things you can count individually: one, two, three of them. They have both singular and plural forms.",
              examples: ["✅ one book, two books, many chairs", "❌ one furniture (furniture is uncountable — see below)"]
            },
            {
              title: "Uncountable Nouns",
              body: "Treated as a mass or a concept rather than individual units — no plural form, no 'a/an' directly in front.",
              examples: ["✅ some water, a lot of information, much advice", "❌ an information, two advices, many furnitures", "✅ a piece of information, a piece of advice, a bit of furniture (use a counting phrase instead)"]
            },
            {
              title: "Common Uncountable Categories",
              body: "Most uncountable nouns fall into a few predictable groups: things normally handled as a mass (rice, sand, money), emotions/abstract concepts (love, advice, happiness), liquids (water, coffee, juice), and food categories (bread, meat, dairy).",
              examples: ["mass: money, rice, sand, flour", "abstract: love, advice, motivation, stress", "liquids: coffee, water, juice, blood", "food categories: bread, meat, fish, dairy"]
            },
            {
              title: "Quantifier Matching",
              body: "Different quantity words pair specifically with countable OR uncountable nouns — mixing them is a very common error.",
              examples: ["✅ many books, few chairs, a number of people (countable)", "✅ much water, little advice, a great deal of information (uncountable)", "❌ much books, many water", "⚠️ 'much' sounds unnatural in positive statements — say 'a lot of time' not 'much time'. Exception: 'so much' and 'too much' ARE natural in positive statements: 'I have too much work.'"]
            }
          ]
        },
        {
          title: "Plural Spelling & Irregular Plurals",
          rules: [
            {
              title: "How to Spell Plurals",
              body: "Most nouns just add -s. Nouns ending in s, x, z, ch, sh add -es. Nouns ending in a consonant + y change y to -ies.",
              examples: ["table → tables, cup → cups (just add -s)", "bus → buses, box → boxes, church → churches (add -es)", "baby → babies, city → cities, party → parties (consonant + y → -ies)"]
            },
            {
              title: "Common Irregular Plurals",
              body: "These don't follow the -s/-es/-ies pattern at all — they must be memorized.",
              examples: ["child → children (NOT childrens)", "man → men, woman → women", "person → people (very common; 'persons' is only used in formal writing)", "foot → feet, tooth → teeth, mouse → mice, leaf → leaves"]
            }
          ]
        },
        {
          title: "Same Word, Countable OR Uncountable — Meaning Changes",
          rules: [
            {
              title: "Countable = A Specific Instance, Uncountable = General/Category",
              body: "Some nouns can be both countable and uncountable, but the meaning shifts depending on which you use. This trips up even advanced learners.",
              examples: ["experience (uncountable) = knowledge/skill: 'She has a lot of experience.' vs an experience (countable) = one event: 'That was an amazing experience.'", "time (uncountable) = the concept: 'We need more time.' vs times (countable) = occasions: 'I've seen that movie three times.'", "room (uncountable) = space: 'There's no room for your bag.' vs a room (countable) = an enclosed space: 'This house has three bedrooms.'", "chicken (uncountable) = the meat: 'I ate chicken for dinner.' vs a chicken (countable) = the animal: 'We have 12 chickens.'", "hair (uncountable) = all of it, in general: 'She has brown hair.' vs a hair (countable) = one single strand: 'There's a hair in my soup.'"]
            },
            {
              title: "Liquids — Uncountable, But Can Be Made Plural via Containers",
              body: "Liquids (coffee, water, juice) are uncountable in general, but become countable when you mean a serving or container.",
              examples: ["✅ I love coffee. (uncountable, general)", "✅ Two coffees, please. (= two cups of coffee — countable when thinking of the container/serving)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ an information → ✅ a piece of information",
        "❌ many water → ✅ much water",
        "❌ furnitures → ✅ furniture (uncountable, no plural form exists)",
        "❌ childrens, mans, womans → ✅ children, men, women (irregular plurals)",
        "❌ I have much time. (positive statement) → ✅ I have a lot of time.",
        "❌ work experiences (on a resume, meaning your background) → ✅ work experience (uncountable = knowledge/skill)"
      ],
      decisionTree: [
        "1. Can the noun be counted individually (one, two, three)? → Countable — use a/an, numbers, many/few",
        "2. Is it a mass or abstract concept with no natural plural? → Uncountable — use much/little, or 'a piece/bit of'",
        "3. Does this word have both a countable AND uncountable form? → Check: does it mean one specific instance (countable) or the general concept/category (uncountable)?",
        "4. Making a plural? → Default: add -s. Ends in s/x/z/ch/sh? → add -es. Ends in consonant+y? → change y to -ies. Otherwise, check the irregular list."
      ],
      quickCheck: [
        { q: "I need some ___ (advice/advices) before deciding.", a: "advice", why: "'advice' is uncountable, no plural form exists." },
        { q: "There isn't ___ (many/much) water left.", a: "much", why: "'water' is uncountable, pairs with 'much' not 'many'." },
        { q: "What is the plural of 'city'?", a: "cities", why: "consonant + y changes to -ies." },
        { q: "What is the plural of 'child'?", a: "children", why: "irregular plural, must be memorized." },
        { q: "She has a lot of ___ (experience/experiences) teaching yoga.", a: "experience", why: "uncountable 'experience' = knowledge/skill, not individual events." },
        { q: "Two ___ (coffee/coffees), please.", a: "coffees", why: "liquids become countable when referring to servings/containers." }
      ]
    }
  },
  {
    id: "pronouns",
    name: "Pronouns",
    subtitle: "Subject, object, possessive, reflexive, relative & indefinite",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Pronouns exist purely to avoid repeating the same noun over and over, but they only work if they clearly and correctly point back to what they replace. Get the wrong type, or leave the reference unclear, and your sentence becomes genuinely confusing — not just grammatically imperfect. This topic covers every pronoun type you need for fluent, natural English.",
      sections: [
        {
          title: "Subject & Object Pronouns",
          rules: [
            {
              title: "Subject Pronouns Do the Action, Object Pronouns Receive It",
              body: "I/he/she/we/they perform the action (subject position). Me/him/her/us/them receive the action or follow a preposition (object position).",
              examples: ["✅ She called him. (she = subject, him = object)", "✅ Please help me with this. (me = object, after verb)", "✅ This gift is for her. (her = object, after preposition 'for')", "❌ Give it to I. → ✅ Give it to me."]
            }
          ]
        },
        {
          title: "Possessive & Reflexive Pronouns",
          rules: [
            {
              title: "Possessive Pronouns Stand Alone",
              body: "Possessive pronouns (mine/yours/his/hers/ours/theirs) show ownership WITHOUT needing the noun again. This is different from possessive adjectives (my/your/his/her/our/their), which always come before a noun.",
              examples: ["✅ This book is mine. (possessive pronoun — stands alone)", "✅ This is my book. (possessive adjective — comes before the noun)", "❌ This book is my. → ✅ This book is mine."]
            },
            {
              title: "Reflexive Pronouns Refer Back to the Subject",
              body: "Myself, yourself, himself, herself, itself, ourselves, themselves — used when the action reflects back onto the subject of the same clause.",
              examples: ["✅ She taught herself French. (reflexive — action reflects back on 'she')", "❌ She taught her French. (sounds like she taught a DIFFERENT person — meaning changes!)", "✅ They introduced themselves. (plural reflexive)"]
            }
          ]
        },
        {
          title: "Pronoun-Antecedent Agreement",
          rules: [
            {
              title: "The Pronoun Must Match Its Antecedent in Number",
              body: "The noun a pronoun refers back to is called its 'antecedent.' A common modern usage: singular 'they/their' is now standard for a person of unspecified or unknown gender.",
              examples: ["✅ Each student must bring their own laptop. (singular 'their' — standard, gender-neutral)", "❌ Each student must bring his or their own laptop. (inconsistent, don't mix forms)", "✅ The dog wagged its tail. (singular 'it' for one animal/object)"]
            }
          ]
        },
        {
          title: "Relative & Indefinite Pronouns",
          rules: [
            {
              title: "Relative Pronouns: Who, Which, That",
              body: "Who/whom refer only to people. Which refers only to things. That can refer to either, but ONLY in defining (essential) clauses. Whose shows possession for both people and things.",
              examples: ["✅ The man who called is my manager. (person)", "✅ The book that I bought is excellent. (thing, defining clause)", "❌ The book who I bought is excellent. (wrong — 'who' is for people only)", "✅ The woman whose car was stolen called the police. (whose = possession)"]
            },
            {
              title: "Indefinite Pronouns Are Always Singular",
              body: "Someone, anybody, everything, nobody, everyone — despite sounding like they could refer to many people, these are grammatically singular and take singular verbs.",
              examples: ["✅ Everybody is welcome. (NOT 'are')", "✅ Nothing was found. (NOT 'were')"]
            }
          ]
        },
        {
          title: "Demonstrative & Reciprocal Pronouns",
          rules: [
            {
              title: "This/That/These/Those",
              body: "Demonstrative pronouns point to something specific — this/that for singular, these/those for plural. This/these = near, that/those = far (physically or in time).",
              examples: ["✅ This is my favorite. (singular, near)", "✅ Those were the best days. (plural, far/past)"]
            },
            {
              title: "Each Other vs One Another",
              body: "Reciprocal pronouns show a mutual action between two or more people. 'Each other' is typically used for two people/things; 'one another' for more than two — though in casual English this distinction is often ignored.",
              examples: ["✅ The two friends helped each other.", "✅ The team members supported one another."]
            }
          ]
        },
        {
          title: "Common Pronoun Reference Errors",
          rules: [
            {
              title: "Ambiguous Pronoun Reference",
              body: "If a pronoun could refer to more than one noun in the sentence, the meaning becomes unclear — this is a real fluency-level error, not just a technicality.",
              examples: ["❌ When Sarah met Amy, she was nervous. (unclear — who was nervous, Sarah or Amy?)", "✅ When Sarah met Amy, Sarah was nervous. (clear, even if slightly repetitive)", "✅ Sarah was nervous when she met Amy. (clear — restructured so 'she' can only mean Sarah)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ Give it to I. → ✅ Give it to me.",
        "❌ This book is my. → ✅ This book is mine.",
        "❌ She taught her French. (meaning herself) → ✅ She taught herself French.",
        "❌ The book who I bought → ✅ The book that/which I bought (use 'who' only for people)",
        "❌ Each student must bring his or their laptop. → ✅ Each student must bring their laptop.",
        "❌ When Sarah met Amy, she left early. (ambiguous) → ✅ Sarah left early when she met Amy."
      ],
      decisionTree: [
        "1. Is the pronoun doing the action or receiving it? → Subject (I/he/she) does it, object (me/him/her) receives it",
        "2. Showing ownership? → Standing alone (no noun after)? Use possessive pronoun (mine/yours). Before a noun? Use possessive adjective (my/your)",
        "3. Does the pronoun refer back to the subject of the SAME clause? → Use a reflexive pronoun (myself, herself)",
        "4. Does the pronoun refer to a person? → who/whom. A thing? → which. Either, in a defining clause? → that. Showing possession? → whose",
        "5. Is the antecedent singular? → Use a singular pronoun (singular 'their' is fine for unspecified gender)",
        "6. Could the pronoun refer to more than one noun in the sentence? → Rewrite for clarity, don't leave it ambiguous"
      ],
      quickCheck: [
        { q: "Please give the file to ___ (I/me).", a: "me", why: "object pronoun needed after preposition 'to'." },
        { q: "This laptop is ___ (my/mine), not yours.", a: "mine", why: "possessive pronoun stands alone without a noun after it." },
        { q: "She taught ___ to play piano.", a: "herself", why: "reflexive pronoun refers back to the subject 'she'." },
        { q: "The woman ___ called is my manager.", a: "who", why: "'who' refers to a person." },
        { q: "Everyone must bring ___ own laptop.", a: "their", why: "gender-neutral singular pronoun with indefinite 'everyone'." },
        { q: "Fix for clarity: When Tom called Jake, he was busy. (who was busy — ambiguous)", a: "Tom was busy when he called Jake. (or similar clear rewrite)", why: "the original sentence has an ambiguous pronoun that could refer to either person." }
      ]
    }
  },
  {
    id: "articles",
    name: "Articles",
    subtitle: "a / an / the / zero article",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Articles are tiny words, but getting them wrong is one of the fastest ways to sound non-native — even when every other word in your sentence is perfect. Native speakers choose a/an/the/nothing instinctively based on one question: is this specific and known, or general? Once you internalize that single distinction, most article rules fall into place naturally instead of feeling like memorized trivia.",
      sections: [
        {
          title: "The Basics — A, An, The, Ø",
          rules: [
            {
              title: "A vs An — Sound, Not Spelling",
              body: "Choose based on the SOUND that follows, not the written letter.",
              examples: ["a book, a car, a university (sounds like \"yoo\")", "an apple, an hour (silent H), an honest person, an MBA"]
            },
            {
              title: "The — Specific or Known",
              body: "Use \"the\" for something specific: second mention, already known, obvious from context, or unique.",
              examples: ["I bought a book. The book is interesting. (2nd mention)", "Please close the door. (obvious from situation)", "the sun, the moon, the sky (unique)"]
            },
            {
              title: "General vs Specific — The Core Idea",
              body: "This single comparison solves most article confusion.",
              examples: ["Books are useful. (general) vs The books on my desk are useful. (specific)", "Education is important. (general) vs The education system needs reform. (specific)"]
            }
          ]
        },
        {
          title: "New Info vs Known Info — The Easy Way to Choose",
          rules: [
            {
              title: "Is It New, or Already Known?",
              body: "Ask yourself: is this NEW information for the listener, or do they already know what I mean? New → a/an. Already known → the.",
              examples: ["A robber walked into a bank. (new — we don't know which robber)", "The robber pointed a gun at the teller. (now we know — same robber as before)", "I bought a gift for my sister. (listener doesn't know what gift)", "I bought the gift for my sister. (listener already knows which gift)"]
            }
          ]
        },
        {
          title: "Decades, Centuries & Dates",
          rules: [
            {
              title: "Decades & Centuries",
              body: "Always use \"the\" with decades and centuries.",
              examples: ["the 1990s", "the 18th century", "Jazz became popular in the 1920s."]
            },
            {
              title: "Dates — Number + of + Month",
              body: "Use \"the\" with this specific date pattern.",
              examples: ["the 4th of July", "the 22nd of March", "We got married on the 15th of September."]
            }
          ]
        },
        {
          title: "A/An — Deeper Uses",
          rules: [
            {
              title: "Common Uses of A/An",
              body: "One member of a group, first mention, jobs/professions, meaning \"one\", classification, rates, and exclamations.",
              examples: ["I need a pen. (one of many)", "She is a doctor. He is an engineer. (profession)", "I need a minute. (= one minute)", "twice a day, $10 a kilo, 60 km an hour", "What a beautiful day!"]
            },
            {
              title: "A/An With Adjectives",
              body: "The article depends on the sound right after it — not the noun itself.",
              examples: ["a big house / an expensive house", "a very expensive house / an extremely expensive house"]
            },
            {
              title: "A/An Cannot Go Directly With Uncountable Nouns",
              body: "Use a counting phrase instead.",
              examples: ["a water ❌ → a glass of water ✅", "an advice ❌ → a piece of advice ✅", "an information ❌ → a piece of information ✅"]
            }
          ]
        },
        {
          title: "Countable, Uncountable & Zero Article",
          rules: [
            {
              title: "Countable vs Uncountable",
              body: "Singular countable nouns almost always need a determiner (a/the/my/this). Plural and uncountable nouns can stand alone when speaking generally.",
              examples: ["I bought a book. (NOT \"I bought book\")", "Books are expensive. (general, no article)", "Water is important. (general, no article)"]
            },
            {
              title: "Zero Article — General Meaning",
              body: "Plural nouns, uncountable nouns, and abstract concepts take no article when speaking generally.",
              examples: ["Dogs are loyal. (not \"the dogs\", unless specific)", "Love is important.", "The happiness she felt was obvious. (specific → the)"]
            }
          ]
        },
        {
          title: "Places, Institutions & Fixed Expressions",
          rules: [
            {
              title: "Institutions — General Purpose vs Specific Building",
              body: "This is one of the biggest sources of mistakes.",
              examples: ["go to school = attend (student) / go to the school = visit the building", "in hospital = as a patient (UK) / go to the hospital = visit the building", "at university = studying / visit the university = visit the building"]
            },
            {
              title: "Meals, Transport & Home",
              body: "These fixed expressions don't follow the general rules — learn them as set phrases.",
              examples: ["have breakfast/lunch/dinner (no article)", "by car, by bus, by train (no article)", "go home / stay at home / clean the house"]
            },
            {
              title: "Musical Instruments vs Sports",
              body: "Instruments take \"the\"; sports and games take no article.",
              examples: ["play the piano, play the guitar", "play football, play cricket, play tennis"]
            },
            {
              title: "Fixed Time & Place Expressions",
              body: "Conventional phrases with fixed article use — memorize as set expressions.",
              examples: ["in the morning / in the evening / at night", "at home, at work, at school, in bed"]
            }
          ]
        },
        {
          title: "Geography — Full Reference Table",
          rules: [
            {
              title: "Usually take THE",
              body: "Rivers, seas, oceans, mountain ranges, deserts, groups of islands, and plural/group country names.",
              examples: ["the Nile, the Amazon (rivers)", "the Mediterranean, the Pacific Ocean", "the Himalayas, the Sahara, the Maldives", "the United States, the United Kingdom, the Netherlands"]
            },
            {
              title: "Usually take Ø (no article)",
              body: "Most countries, cities, continents, single mountains, and lakes.",
              examples: ["Bangladesh, India, Japan (countries)", "Dhaka, London (cities)", "Asia, Europe (continents)", "Mount Everest, Lake Victoria"]
            }
          ]
        },
        {
          title: "The + Special Categories",
          rules: [
            {
              title: "Superlatives, Ordinals & Special Words",
              body: "These always take \"the\".",
              examples: ["the best, the biggest, the most important", "the first, the second, the third", "the only reason, the same thing"]
            },
            {
              title: "The + Adjective = A Group of People",
              body: "Refers to a whole group sharing that quality.",
              examples: ["the rich, the poor, the elderly, the unemployed"]
            },
            {
              title: "Organizations, Newspapers & Landmarks",
              body: "Learn these as established names rather than a strict rule.",
              examples: ["the United Nations, the World Bank", "the Guardian", "the British Museum"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I want to buy car. → ✅ I want to buy a car.",
        "❌ The education is important. → ✅ Education is important. (unless referring to a specific system)",
        "❌ He is an university student. → ✅ He is a university student. (consonant sound \"yoo\")",
        "❌ She is a honest person. → ✅ She is an honest person. (silent H)",
        "❌ The Bangladesh is beautiful. → ✅ Bangladesh is beautiful. (most countries take no article)",
        "Context matters: \"The people need clean water\" can be correct OR incorrect depending on whether specific people are meant — articles are often about context, not just fixed rules."
      ],
      decisionTree: [
        "1. Is it a proper name? → Usually Ø (check geography exceptions above)",
        "2. Is it singular + countable? → It normally needs a determiner (a/an/the/my/this)",
        "3. Is it specific or already identified? → THE",
        "4. Is it non-specific, singular, and countable? → A/AN",
        "5. Is it plural or uncountable AND general? → Ø",
        "6. Is it a special expression, place, or geographical name? → Apply that specific rule above"
      ],
      quickCheck: [
        { q: "I need ___ umbrella; it's raining.", a: "an", why: "\"umbrella\" starts with a vowel sound." },
        { q: "___ moon looks beautiful tonight.", a: "the", why: "unique object." },
        { q: "She loves ___ music in general.", a: "(no article)", why: "general/abstract noun." },
        { q: "That was ___ best movie I've ever seen.", a: "the", why: "superlative." },
        { q: "He was rushed to ___ hospital after the accident.", a: "(no article)", why: "general purpose, not the building." },
        { q: "He is ___ university student.", a: "a", why: "\"university\" starts with a consonant sound (\"yoo\")." },
        { q: "I went to ___ school where my father studied.", a: "the", why: "referring to the specific building, not the general purpose." },
        { q: "___ Netherlands is famous for its tulips.", a: "The", why: "countries with plural/group names take \"the\"." }
      ]
    }
  },
  {
    id: "subject-verb-agreement",
    name: "Subject-Verb Agreement",
    subtitle: "Making the verb match its subject",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Subject-verb agreement feels simple at first (he runs, they run) until English throws tricky exceptions at you — collective nouns, indefinite pronouns, and words that look plural but aren't. Native speakers get these right automatically because they've absorbed thousands of examples; as a learner, you need the underlying logic instead, since 'sounding right' isn't reliable until you've had far more exposure.",
      sections: [
        {
          title: "The Basics",
          rules: [
            {
              title: "Simple Agreement",
              body: "Singular subjects (he, she, it, or a singular noun) take a verb with -s in present simple.",
              examples: ["He works. / They work.", "She goes. / They go.", "The dog barks. / The dogs bark."]
            },
            {
              title: "Words That Look Plural But Are Singular",
              body: "Some nouns end in -s but are grammatically singular.",
              examples: ["The news is shocking.", "Mathematics is difficult.", "Physics is fascinating.", "Politics (as a subject) is complex."]
            },
            {
              title: "Fixed Plural Nouns",
              body: "Some nouns are always plural, even though they refer to one object.",
              examples: ["My glasses are broken.", "These scissors are sharp.", "His trousers are new."]
            }
          ]
        },
        {
          title: "Tricky Subjects",
          rules: [
            {
              title: "Collective Nouns",
              body: "Words like family, team, government, committee are usually singular when acting as one unit.",
              examples: ["The team is playing well this season.", "The committee is meeting today."],
              mistake: "In British English, plural is sometimes used to emphasize individual members: \"The team are arguing.\" Both are acceptable depending on context."
            },
            {
              title: "Indefinite Pronouns",
              body: "Everyone, everybody, someone, somebody, anyone, nobody, each — always singular.",
              examples: ["Everyone is here.", "Each of the students has a laptop.", "Nobody knows the answer."]
            },
            {
              title: "Amounts, Distances & Time as One Unit",
              body: "A single amount, distance, or period of time takes a singular verb.",
              examples: ["Ten miles is a long walk.", "Five years is a long time to wait.", "Fifty dollars is too expensive."]
            }
          ]
        },
        {
          title: "Don't Let Extra Words Fool You",
          rules: [
            {
              title: "\"One Of The ___\" Always Takes a Singular Verb",
              body: "Even though the noun right before the verb looks plural, \"one of\" means you're talking about a single item from the group — so the verb stays singular.",
              examples: ["One of my friends is an architect. (NOT 'are' — friends is just describing the group)", "One of the boxes is missing.", "One of your shoelaces is undone."]
            },
            {
              title: "Long Phrases Between Subject and Verb Don't Change Agreement",
              body: "Extra descriptive words often sit between the real subject and its verb. Find the true subject and ignore everything in between.",
              examples: ["The box of old photographs belongs to my grandfather. (subject = 'box', not 'photographs')", "A collection of ancient artifacts found in the city has attracted attention. (subject = 'collection')"]
            },
            {
              title: "\"Along With,\" \"As Well As,\" \"Together With\" Don't Add to the Subject",
              body: "Unlike 'and', these phrases don't combine with the subject to make it plural — they're treated as extra information, so the verb still matches the original subject alone.",
              examples: ["The manager, along with two assistants, is reviewing the file. (subject is just 'the manager' — singular)", "My father, as well as my uncles, runs the family business. (subject is just 'my father' — singular)"]
            },
            {
              title: "There Is / There Are",
              body: "Look at the noun that comes right AFTER is/are — that's what decides which one you need.",
              examples: ["There is a bottle of water on the table. (singular noun follows)", "There are two cats in the yard. (plural noun follows)"]
            }
          ]
        },
        {
          title: "Groups That Take a Plural Verb",
          rules: [
            {
              title: "Adjectives Used as Group Nouns",
              body: "Words like 'the rich,' 'the poor,' 'the elderly,' 'the homeless,' 'the unemployed' describe a group of people, even though they look like single adjectives — they always take a plural verb.",
              examples: ["The elderly need extra care in extreme heat.", "The unemployed are struggling to find work.", "The homeless deserve more support."]
            }
          ]
        },
        {
          title: "Compound Subjects",
          rules: [
            {
              title: "Two Subjects Joined by \"And\" = Plural",
              body: "When two or more subjects are joined by 'and', they combine into a plural subject and take a plural verb.",
              examples: ["Krish and Radha are on their way.", "My uncle, aunt, and cousin are visiting."]
            },
            {
              title: "Exception: \"And\" Pair Treated as ONE Single Idea",
              body: "If two nouns joined by 'and' are really thought of as a single combined thing (a dish, a routine, a well-known pairing), the verb stays singular.",
              examples: ["Fried rice and chicken is his favorite dish. (one meal, treated as one idea)", "Bread and butter is a classic breakfast."]
            },
            {
              title: "Two Subjects Joined by \"Or\" = Singular",
              body: "When two singular nouns are joined by plain 'or' (not just either/or), the subject is still treated as singular.",
              examples: ["Celery or spring onion works fine.", "Your mom or dad has to be here."]
            }
          ]
        },
        {
          title: "Special Subject Types",
          rules: [
            {
              title: "Gerunds & Infinitives as Subjects = Singular",
              body: "When a gerund (-ing) or infinitive (to + verb) acts as the subject of a sentence, it's always treated as singular.",
              examples: ["Standing under a tree during a storm is not safe.", "To finish this project on time seems impossible."]
            },
            {
              title: "Titles of Books, Movies & Novels = Singular",
              body: "Even if a title looks plural or contains 'and', it refers to ONE single work, so it takes a singular verb.",
              examples: ["Great Expectations is a novel by Charles Dickens.", "The Avengers is one of the highest-grossing films ever made."]
            },
            {
              title: "Positive + Negative Paired Subjects",
              body: "When a sentence contrasts a positive subject with a negated one ('not X but Y' / 'X but not Y'), the verb agrees with the POSITIVE subject, regardless of which one is singular or plural.",
              examples: ["Not the villagers but the chairman tries to help the village. (agrees with 'the chairman', the positive subject)", "The manager, not the employees, is responsible."]
            }
          ]
        },
        {
          title: "Quantifiers + Of + Noun",
          rules: [
            {
              title: "The Verb Matches the Object of \"Of\"",
              body: "With phrases like 'some of,' 'all of,' 'none of,' 'half of,' or 'more of,' the verb agrees with whatever noun comes after 'of' — not with the quantifier itself.",
              examples: ["Some of the cake is gone. (uncountable 'cake' → singular)", "Some of the cookies are gone. (countable plural 'cookies' → plural)", "None of the information was useful. (singular)", "None of the students were late. (plural)"]
            }
          ]
        },
        {
          title: "Subjunctive Mood — Wishes, Suggestions & Demands",
          rules: [
            {
              title: "\"Were\" Instead of \"Was\" for Unreal Wishes",
              body: "After 'wish' or in hypothetical 'if' clauses, use 'were' for all subjects (including I/he/she/it), not 'was' — this is the subjunctive mood, breaking the normal agreement rule on purpose.",
              examples: ["I wish I were a bird. (not 'I was')", "If she were here, she would help."]
            },
            {
              title: "Base Verb Form After Suggest/Demand/Request/Insist",
              body: "After verbs like suggest, demand, request, insist, and recommend (usually with 'that'), use the plain base form of the verb for every subject — no -s, even for he/she/it.",
              examples: ["We request that everyone make their choices now. (not 'makes')", "The doctor insists that he rest for a week. (not 'rests')", "I suggest that she go home early. (not 'goes')"]
            }
          ]
        },
        {
          title: "Either/Or, Neither/Nor & The Number Of",
          rules: [
            {
              title: "Either...Or / Neither...Nor",
              body: "The verb agrees with the subject CLOSEST to it, not the first one.",
              examples: ["Either the manager or the employees are responsible. (agrees with employees)", "Neither the students nor the teacher was informed. (agrees with teacher)"]
            },
            {
              title: "\"The Number Of\" vs \"A Number Of\"",
              body: "\"The number of\" + plural noun → singular verb. \"A number of\" + plural noun → plural verb (means several/many).",
              examples: ["The number of students has increased. (singular)", "A number of students are absent today. (plural)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ The news are good. → ✅ The news is good.",
        "❌ Everybody are ready. → ✅ Everybody is ready.",
        "❌ One of my friends are an architect. → ✅ One of my friends is an architect.",
        "❌ The box of photographs belong to him. → ✅ The box of photographs belongs to him. (match 'box', not 'photographs')",
        "❌ The elderly needs support. → ✅ The elderly need support. (group noun, always plural)",
        "❌ The number of people are increasing. → ✅ The number of people is increasing.",
        "❌ My glass is broken (meaning eyewear). → ✅ My glasses are broken.",
        "❌ Each of the students have finished. → ✅ Each of the students has finished.",
        "❌ Krish and Radha is on their way. → ✅ Krish and Radha are on their way. (compound subject with 'and' = plural)",
        "❌ I wish I was a bird. → ✅ I wish I were a bird. (subjunctive mood)",
        "❌ We request that everyone makes their choice. → ✅ We request that everyone make their choice. (base form after 'request that')",
        "❌ Some of the cookies is gone. → ✅ Some of the cookies are gone. (verb matches the noun after 'of')",
        "❌ The Avengers are a great movie. → ✅ The Avengers is a great movie. (a title is one single work)"
      ],
      decisionTree: [
        "1. Is the subject a fixed plural noun (scissors, glasses, trousers)? → Always plural verb",
        "2. Does it look plural but is actually a subject/disease name (news, mathematics, physics)? → Singular verb",
        "3. Is it an indefinite pronoun (everyone, each, nobody) or \"one of the ___\"? → Singular verb",
        "4. Is it a group described by an adjective (the rich, the elderly, the homeless)? → Plural verb",
        "5. Two subjects joined by \"and\"? → Plural, UNLESS they form one single combined idea (bread and butter)",
        "6. Is the subject a gerund, infinitive, or the title of a book/movie? → Singular verb",
        "7. Is there a long phrase between the subject and the verb? → Ignore it, match the TRUE subject",
        "8. Starting with \"there\"? → Match the verb to the noun that comes right after it",
        "9. Is it joined by either/or or neither/nor? → Match the verb to the CLOSEST subject",
        "10. Is it \"some/all/none/half of ___\"? → Match the verb to the noun AFTER \"of\"",
        "11. Is it \"the number of\" or \"a number of\"? → \"the number of\" = singular, \"a number of\" = plural",
        "12. Is it a wish, hypothetical, or after suggest/demand/request/insist? → Use the subjunctive (were, or base verb form)",
        "13. Otherwise → Match the verb to whether the subject is singular or plural normally"
      ],
      quickCheck: [
        { q: "The news ___ very encouraging today.", a: "is", why: "\"news\" is always singular." },
        { q: "One of my sisters ___ a doctor.", a: "is", why: "\"one of\" always takes a singular verb, no matter how many are in the group." },
        { q: "There ___ a bottle of water and a sandwich on the table.", a: "is", why: "match the verb to the noun right after it — 'bottle' is singular." },
        { q: "The elderly ___ more support during winter.", a: "need", why: "'the elderly' describes a group of people and always takes a plural verb." },
        { q: "Tom and Jerry ___ best friends. (compound subject)", a: "are", why: "two subjects joined by 'and' form a plural subject." },
        { q: "I wish I ___ taller. (subjunctive)", a: "were", why: "after 'wish', use 'were' for all subjects, not 'was'." }
      ]
    }
  },
  {
    id: "present-tenses",
    name: "Present Tenses",
    subtitle: "Simple, continuous, perfect",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "The present tenses aren't really about 'now' in the way many learners assume — present simple describes permanent facts and habits, while present continuous describes what's temporarily true or literally happening this second. Confusing the two is the single most common tense mistake in spoken English, and it changes meaning more than learners realize: 'I live in Dhaka' and 'I'm living in Dhaka' are both correct, but they say very different things about how long you'll be there.",
      sections: [
        {
          title: "Present Simple vs Present Continuous",
          rules: [
            {
              title: "Present Simple — Facts, Habits, Routines",
              body: "Use for general facts, habits, fixed schedules, and permanent situations.",
              examples: ["Water boils at 100°C. (fact)", "I wake up at 7am every day. (habit)", "The train leaves at 6pm. (schedule)", "She works at a bank. (permanent)"]
            },
            {
              title: "Present Continuous — Now, Temporary",
              body: "Use for actions happening right now, temporary situations, and changing/developing situations.",
              examples: ["I am reading this sentence. (now)", "He is staying at a hotel this week. (temporary)", "The population is growing rapidly. (changing)"]
            },
            {
              title: "Side-by-Side Comparison",
              body: "This contrast is the single most useful thing to understand about present tenses.",
              examples: ["I work at a bank. (permanent) vs I am working from home this week. (temporary)", "She plays tennis every weekend. (habit) vs She is playing tennis right now. (in progress)"]
            }
          ]
        },
        {
          title: "Stative Verbs",
          rules: [
            {
              title: "Verbs Not Normally Used in Continuous Form",
              body: "Verbs describing states (know, understand, believe, want, like, love, need, own, belong, seem) are not usually continuous.",
              examples: ["I understand the lesson. (NOT am understanding)", "This belongs to me. (NOT is belonging)"]
            },
            {
              title: "Verbs That Change Meaning",
              body: "Some verbs are stative in one meaning, active in another.",
              examples: ["I think it's a good idea. (believe = stative) vs I am thinking about the offer. (actively considering = active)", "This soup tastes great. (sensory = stative) vs The chef is tasting the soup. (action = active)"]
            }
          ]
        },
        {
          title: "Present Perfect & Present Perfect Continuous",
          rules: [
            {
              title: "Present Perfect — Past Connected to Now",
              body: "Use for unspecified past time relevant now, life experiences, or an action starting in the past continuing now.",
              examples: ["I have finished my homework. (unspecified time)", "I have visited Japan. (life experience)", "She has lived here for 10 years. (continuing)"]
            },
            {
              title: "For vs Since",
              body: "\"For\" + duration. \"Since\" + starting point.",
              examples: ["for three years, for a long time", "since 2019, since Monday, since childhood"]
            },
            {
              title: "Present Perfect Continuous — Ongoing Duration",
              body: "Emphasizes duration of an action continuing now, or just stopped with visible results.",
              examples: ["I have been studying English for three years.", "She has been crying — her eyes are red."]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I stay at a hotel this week. → ✅ I am staying at a hotel this week. (temporary)",
        "❌ I am knowing the answer. → ✅ I know the answer. (stative verb)",
        "❌ I have seen him yesterday. → ✅ I saw him yesterday. (specific past time = past simple)",
        "❌ I have lived here since five years. → ✅ I have lived here for five years.",
        "❌ She go to work. → ✅ She goes to work. (missing -s)",
        "❌ I am understanding this now. → ✅ I understand this now."
      ],
      decisionTree: [
        "1. Is it a general fact, habit, or fixed schedule? → Present simple",
        "2. Is it happening right now or temporary? → Present continuous",
        "3. Is it a stative verb (know, believe, want)? → Present simple, even if it feels like \"now\"",
        "4. Does it connect the past to now, with no specific time mentioned? → Present perfect",
        "5. Is there a specific past time word (yesterday, in 2020)? → Past simple, not present perfect",
        "6. Are you emphasizing HOW LONG something has been happening? → Present perfect continuous"
      ],
      quickCheck: [
        { q: "Water ___ at 100 degrees Celsius.", a: "boils", why: "scientific fact, present simple." },
        { q: "Look! It ___ outside right now.", a: "is raining", why: "happening now, present continuous." },
        { q: "I ___ the lesson now.", a: "understand", why: "stative verb, not used in continuous." },
        { q: "She has lived here ___ 2019.", a: "since", why: "2019 is a starting point." },
        { q: "I ___ Japan twice. (no specific time)", a: "have visited", why: "life experience, present perfect." },
        { q: "The train ___ at 6pm every day. (fixed schedule)", a: "leaves", why: "fixed schedules and timetables use present simple, even referring to the future." }
      ]
    }
  },
  {
    id: "past-tenses",
    name: "Past Tenses",
    subtitle: "Simple, continuous, perfect",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Talking about the past well means showing your listener the correct ORDER and RELATIONSHIP between past events, not just that something happened before now. Past simple, past continuous, and past perfect exist specifically to show sequencing — which action was already in progress, which one happened first, which one interrupted another. Get the sequencing wrong, and your story becomes genuinely confusing, even if each individual sentence is grammatically fine.",
      sections: [
        {
          title: "Past Simple & Past Continuous",
          rules: [
            {
              title: "Past Simple — Completed Actions",
              body: "Actions that started and finished in the past, often with a time marker.",
              examples: ["I visited Paris last year.", "She finished her homework at 8pm.", "They moved to Dhaka in 2015."]
            },
            {
              title: "Past Continuous — Action in Progress",
              body: "An action ongoing at a specific past point, often interrupted by another action.",
              examples: ["I was watching TV when the phone rang.", "They were playing football at 5pm yesterday."]
            },
            {
              title: "The Interruption Pattern",
              body: "The classic combination: one action interrupts another.",
              examples: ["I was cooking dinner when the doorbell rang.", "She was sleeping when the earthquake happened."],
              mistake: "Using past simple for both: \"I cooked dinner when the doorbell rang\" wrongly sounds sequential instead of interrupted."
            }
          ]
        },
        {
          title: "Past Perfect & Past Perfect Continuous",
          rules: [
            {
              title: "Past Perfect — Earlier Than Another Past Action",
              body: "Shows the correct order of two past events — this one happened FIRST.",
              examples: ["By the time we arrived, the movie had already started.", "She had finished her work before her boss called."]
            },
            {
              title: "Past Perfect Continuous — Ongoing Before Another Past Action",
              body: "Emphasizes the duration of an action before another past event.",
              examples: ["I had been waiting for an hour before the bus finally came.", "She had been studying all night before the exam started."]
            }
          ]
        },
        {
          title: "Used To, Would & Common Confusions",
          rules: [
            {
              title: "Used To / Would — Past Habits",
              body: "\"Used to\" for past habits/states no longer true. \"Would\" for repeated past actions (not states).",
              examples: ["I used to play football every weekend.", "Every summer, we would visit our grandparents."],
              mistake: "Using 'would' for past states: \"I would live in London\" is wrong → \"I used to live in London.\""
            },
            {
              title: "Past Simple vs Present Perfect",
              body: "Past simple = specific past time. Present perfect = unspecified time, or connects to now.",
              examples: ["I visited Paris in 2019. (specific → past simple)", "I have visited Paris. (unspecified → present perfect)"]
            },
            {
              title: "Irregular Verbs",
              body: "Many common verbs don't take -ed in the past — they have unique forms that must be memorized.",
              examples: ["go → went, eat → ate, see → saw, write → wrote, buy → bought, take → took"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I watched TV when the phone rang. → ✅ I was watching TV when the phone rang.",
        "❌ I had arrived when she left. (unclear order) → ✅ She had left by the time I arrived. (leaving happened first)",
        "❌ I would have a car. → ✅ I used to have a car.",
        "❌ I goed there. → ✅ I went there. (irregular verb)",
        "❌ I have seen him yesterday. → ✅ I saw him yesterday.",
        "❌ By the time we arrived, the movie started. → ✅ ...the movie had already started."
      ],
      decisionTree: [
        "1. Is there a specific past time word (yesterday, in 2015, ago)? → Past simple",
        "2. Was the action in progress at a specific past moment, interrupted by another? → Past continuous for the ongoing one, past simple for the interrupting one",
        "3. Did one action definitely happen BEFORE another past action? → Past perfect for the earlier one",
        "4. Are you emphasizing HOW LONG something was happening before another past event? → Past perfect continuous",
        "5. Is it a past habit/state no longer true? → \"Used to\"",
        "6. Is it a repeated past action (not a state), often storytelling? → \"Would\""
      ],
      quickCheck: [
        { q: "I ___ Paris last year.", a: "visited", why: "specific past time, past simple." },
        { q: "She ___ when the earthquake happened.", a: "was sleeping", why: "ongoing action interrupted by another past event." },
        { q: "By the time we arrived, the movie ___.", a: "had already started", why: "happened before another past action, past perfect." },
        { q: "I ___ for an hour before the bus came.", a: "had been waiting", why: "ongoing duration before another past event." },
        { q: "I ___ play football every weekend, but not anymore.", a: "used to", why: "past habit no longer true." },
        { q: "By the time she called, I ___ (already leave).", a: "had already left", why: "an action completed before another past action uses past perfect." }
      ]
    }
  },
  {
    id: "future-forms",
    name: "Future Forms",
    subtitle: "Will, going to, and more",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Unlike many languages, English doesn't have one single 'future tense' — it has several future forms, and native speakers choose between them based on how CERTAIN they are and WHEN the decision was made. Saying 'I will visit my parents' versus 'I'm going to visit my parents' versus 'I'm visiting my parents Saturday' all point to the future, but each signals something different about how settled the plan is.",
      sections: [
        {
          title: "Will vs Going To",
          rules: [
            {
              title: "Will — Predictions & Spontaneous Decisions",
              body: "Used for predictions without present evidence, spontaneous decisions, and promises.",
              examples: ["I think it will rain tomorrow. (general prediction)", "I'll answer the phone. (spontaneous)", "I will help you with that. (promise)"]
            },
            {
              title: "Going To — Plans & Evidence-Based Predictions",
              body: "Used for plans already decided before speaking, and predictions based on visible present evidence.",
              examples: ["I'm going to visit my parents this weekend. (already decided)", "Look at those clouds — it's going to rain. (evidence now)"]
            }
          ]
        },
        {
          title: "Present Tenses for Future",
          rules: [
            {
              title: "Present Continuous — Fixed Arrangements",
              body: "Used for confirmed future plans with a set time and place.",
              examples: ["We are meeting at 5pm tomorrow.", "She is flying to London next week."]
            },
            {
              title: "Present Simple — Fixed Schedules",
              body: "Used for timetables and schedules fixed by an official source, not personal plans.",
              examples: ["The train leaves at 9am tomorrow.", "The movie starts at 7pm."]
            },
            {
              title: "Going To vs Present Continuous — Intention vs Definite Plan",
              body: "Both are used for future plans and are often interchangeable, but there's a subtle difference: \"going to\" often expresses an intention that might not happen exactly as planned. Present continuous sounds more definite and already arranged.",
              examples: ["I'm going to watch movies all weekend. (intention — may or may not happen)", "I'm meeting Jake for dinner tonight. (definite — time and place already set)"]
            }
          ]
        },
        {
          title: "Future Continuous & Perfect Forms",
          rules: [
            {
              title: "Future Continuous — In Progress at a Future Time",
              body: "An action that will be happening at a specific future point.",
              examples: ["This time tomorrow, I will be flying to Dubai.", "At 8pm tonight, we will be having dinner."]
            },
            {
              title: "Future Perfect — Completed Before a Future Point",
              body: "An action that will be finished before a specific future point.",
              examples: ["By next year, I will have graduated.", "She will have finished the report by Friday."]
            },
            {
              title: "Future Perfect Continuous — Duration Up to a Future Point",
              body: "Emphasizes how long an action will have been happening.",
              examples: ["By next month, I will have been working here for five years."]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I will visit my parents this weekend. (already decided) → ✅ I'm going to visit them.",
        "❌ The phone is ringing — I'm going to answer it. → ✅ I'll answer it. (spontaneous)",
        "❌ If it will rain, we will stay home. → ✅ If it rains, we will stay home.",
        "❌ By next year, I will graduated. → ✅ By next year, I will have graduated.",
        "❌ I meet her tomorrow at 5. (personal plan) → ✅ I am meeting her tomorrow at 5."
      ],
      decisionTree: [
        "1. Is it a spontaneous decision made right now, or a promise? → Will",
        "2. Is it a plan already decided before speaking? → Going to",
        "3. Is it a prediction with visible evidence right now? → Going to",
        "4. Is it a prediction with no evidence, just a general belief? → Will",
        "5. Is it a confirmed personal arrangement (time + place set)? → Present continuous",
        "6. Is it an official fixed schedule (train, flight, class)? → Present simple",
        "7. Will it be IN PROGRESS at a specific future time? → Future continuous",
        "8. Will it be FINISHED before a future point? → Future perfect"
      ],
      quickCheck: [
        { q: "Look at those clouds — it ___ going to rain.", a: "is", why: "evidence-based prediction uses 'going to'." },
        { q: "I think it ___ later today. (general prediction)", a: "will rain", why: "prediction without evidence uses 'will'." },
        { q: "The train ___ at 9am tomorrow.", a: "leaves", why: "fixed schedule uses present simple." },
        { q: "By next year, I ___.", a: "will have graduated", why: "completed before a future point, future perfect." },
        { q: "If it rains tomorrow, we ___ home.", a: "will stay", why: "first conditional main clause uses 'will'." },
        { q: "This time tomorrow, I ___ (fly) to Dubai.", a: "will be flying", why: "an action in progress at a specific future time uses future continuous." }
      ]
    }
  },
  {
    id: "verb-patterns",
    name: "Verb Patterns (Gerunds & Infinitives)",
    subtitle: "Which verbs take -ing vs to + verb",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Some English verbs must be followed by -ing (gerund), others must be followed by to + verb (infinitive) — and frustratingly, there's rarely a logical rule explaining which is which. Native speakers know 'enjoy swimming' and 'want to swim' are correct purely from repeated exposure, not from a grammar rule. This makes verb patterns one of the few areas where memorization genuinely is the fastest path to accuracy.",
      sections: [
        {
          title: "Gerund-Only Verbs",
          rules: [
            {
              title: "Verbs Followed by -ing",
              body: "Common verbs like enjoy, avoid, suggest, deny, admit, finish, mind, consider, and practice are always followed by a gerund.",
              examples: ["I enjoy reading.", "She suggested going to the beach.", "He denied taking the money.", "They finished eating."],
              mistake: "❌ I enjoy to read. → ✅ I enjoy reading."
            }
          ]
        },
        {
          title: "Infinitive-Only Verbs",
          rules: [
            {
              title: "Verbs Followed by To + Base Verb",
              body: "Common verbs like want, decide, plan, hope, promise, agree, refuse, and manage are always followed by an infinitive.",
              examples: ["I want to leave.", "She decided to stay.", "He promised to call.", "They refused to answer."],
              mistake: "❌ I want leaving. → ✅ I want to leave."
            }
          ]
        },
        {
          title: "Gerunds & Infinitives as Subjects",
          rules: [
            {
              title: "Gerunds Can Be the Subject of a Sentence",
              body: "When a verb acts as the subject of a sentence, it must be a gerund — this is by far the more common and natural choice.",
              examples: ["Cleaning is hard work.", "Walking to work every day helped my back.", "Smoking has negative effects on your health. (NOT 'To smoke has...')"]
            },
            {
              title: "Infinitives Can Also Be Subjects — But Rarely, For Goals",
              body: "An infinitive subject is possible but far less common — usually for abstract statements or talking about goals/achievements. The gerund is almost always the safer, more natural choice.",
              examples: ["To become a doctor had always been her dream.", "To pass this class is my only goal.", "(Both work, but 'Becoming a doctor...' / 'Passing this class...' sound more natural in everyday speech.)"]
            },
            {
              title: "Infinitive to Show Purpose (= \"In Order To\")",
              body: "Use to + verb at the start or in the middle of a sentence to explain WHY someone does something — this is short for 'in order to,' which sounds more natural in speech than writing it out fully.",
              examples: ["I wear glasses to see. (= in order to see)", "To vote, you must be 18. (comma needed when 'to' starts the sentence)", "The company installed cameras to make employees feel safer."]
            }
          ]
        },
        {
          title: "Verb + Object + Infinitive",
          rules: [
            {
              title: "Some Verbs Take an Object Before the Infinitive",
              body: "Verbs like ask, remind, want, tell, and advise are often followed by a person/object, THEN the infinitive.",
              examples: ["I asked my friend to help me.", "Please remind me to call mom later.", "She wants him to succeed."]
            }
          ]
        },
        {
          title: "Verbs That Take Both — With Meaning Changes",
          rules: [
            {
              title: "Same Meaning Either Way",
              body: "Some verbs (start, begin, continue, like, love, hate, prefer) can take either form with little or no meaning difference.",
              examples: ["I started reading. / I started to read. (same meaning)"]
            },
            {
              title: "Different Meaning Depending on Form",
              body: "A few verbs genuinely change meaning depending on gerund vs infinitive.",
              examples: ["I stopped smoking. (I quit the habit) vs I stopped to smoke. (I paused another activity in order to smoke)", "I remember locking the door. (a memory of a past action) vs I remembered to lock the door. (didn't forget to do it)", "I tried calling her. (attempted as one method) vs I tried to call her. (made an effort, possibly failed)", "I'll never forget playing with her. (a memory I won't lose) vs Don't forget to take out the trash. (don't fail to do this task)", "I regret eating all those donuts. (feel guilty about a past action) vs We regret to inform you... (very formal way to introduce bad news)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I enjoy to swim. → ✅ I enjoy swimming.",
        "❌ She decided going. → ✅ She decided to go.",
        "❌ He suggested to go. → ✅ He suggested going.",
        "❌ I stopped to smoke. (meaning quit) → ✅ I stopped smoking. (to stop smoking = quit the habit)",
        "❌ I remembered locking the door. (meaning I didn't forget to do it) → ✅ I remembered to lock the door."
      ],
      decisionTree: [
        "1. Is the main verb one of: enjoy, avoid, suggest, deny, admit, finish, mind, practice? → Use gerund (-ing)",
        "2. Is the main verb one of: want, decide, plan, hope, promise, agree, refuse, manage? → Use infinitive (to + verb)",
        "3. Is the main verb start/begin/continue/like/love/hate? → Either form usually works with the same meaning",
        "4. Is the main verb stop/remember/try/forget? → Check meaning carefully — gerund and infinitive have DIFFERENT meanings",
        "5. Unsure? → This mostly requires memorizing each verb's pattern individually"
      ],
      quickCheck: [
        { q: "I enjoy ___ (read) before bed.", a: "reading", why: "'enjoy' is always followed by a gerund." },
        { q: "She decided ___ (leave) early.", a: "to leave", why: "'decide' is always followed by an infinitive." },
        { q: "He denied ___ (take) the money.", a: "taking", why: "'deny' is always followed by a gerund." },
        { q: "I stopped ___ (smoke) five years ago. (meaning: quit the habit)", a: "smoking", why: "'stop + gerund' means quitting a habit." },
        { q: "I remembered ___ (lock) the door before leaving. (meaning: didn't forget)", a: "to lock", why: "'remember + infinitive' means not forgetting to do something." },
        { q: "She avoided ___ (answer) the question directly.", a: "answering", why: "'avoid' is always followed by a gerund." }
      ]
    }
  },
  {
    id: "modal-verbs",
    name: "Modal Verbs",
    subtitle: "Can, must, should, might...",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Modal verbs let you express your attitude toward an action — how certain you are, how obligated you feel, how much permission exists — without changing the core verb itself. This is why 'must', 'might', and 'could' can all attach to the same base verb but completely change the meaning. Native speakers rely on modals constantly to soften statements, hedge opinions, and signal politeness — mastering them is often what separates intermediate English from genuinely fluent English.",
      sections: [
        {
          title: "Ability & Permission",
          rules: [
            {
              title: "Ability — Can / Could / Be Able To",
              body: "Can = present ability. Could = past general ability. Be able to = ability in any tense, especially a specific achievement.",
              examples: ["I can speak French.", "I could swim when I was five.", "I was able to finish the race despite the injury."]
            },
            {
              title: "Permission — Can / May / Could",
              body: "Can = informal. May = formal/polite. Could = polite request.",
              examples: ["Can I leave early today?", "May I use your phone, please?", "Could I borrow your pen?"]
            },
            {
              title: "Suggestions & Offers — Shall / Would",
              body: "Shall (mainly British English) = making a suggestion or offer, often with 'we' or 'I'. Would you mind = a very polite way to ask someone to do something.",
              examples: ["Shall we go for lunch?", "Shall I open the window?", "Would you mind closing the door?"]
            }
          ]
        },
        {
          title: "Obligation, Prohibition & Advice",
          rules: [
            {
              title: "Obligation — Must / Have To / Need To",
              body: "Must = personal obligation, often the speaker's own feeling. Have to = obligation from an external rule.",
              examples: ["I must call my mother. (I feel I should)", "I have to pay taxes. (law requires it)", "You need to submit the form by Friday. (practical necessity)"]
            },
            {
              title: "Prohibition — Mustn't vs Don't Have To",
              body: "Mustn't = forbidden. Don't have to = not necessary, but allowed. This is the most confused pair in this topic.",
              examples: ["You mustn't smoke here. (forbidden)", "You don't have to come if you're busy. (optional)"],
              mistake: "\"You mustn't come if you're busy\" would wrongly mean it's forbidden, not optional."
            },
            {
              title: "Advice — Should / Ought To / Had Better",
              body: "Should/Ought to = general advice. Had better = stronger advice with a warning of consequence.",
              examples: ["You should see a doctor.", "You had better hurry, or you'll miss the flight."]
            }
          ]
        },
        {
          title: "Possibility & Deduction",
          rules: [
            {
              title: "Present Deduction",
              body: "May/Might/Could = possibly true. Must = strong logical deduction, near certainty. Can't = strong deduction of impossibility.",
              examples: ["He must be tired — he's been working all day.", "She might be at home.", "That can't be true — I just spoke to him."]
            },
            {
              title: "Past Modals of Deduction",
              body: "modal + have + past participle, for making deductions about the past.",
              examples: ["He must have left already. (strong certainty)", "She might have forgotten. (possibility)", "They can't have arrived yet. (strong certainty it didn't happen)"],
              mistake: "\"He must left already\" is wrong — always needs \"have\": \"He must have left.\""
            }
          ]
        }
      ],
      mistakes: [
        "❌ I can to swim. → ✅ I can swim. (no 'to' after a modal)",
        "❌ She cans swim. → ✅ She can swim. (no -s after a modal)",
        "❌ You mustn't come if you're busy. (meaning optional) → ✅ You don't have to come if you're busy.",
        "❌ He must left already. → ✅ He must have left already.",
        "❌ I could finish the marathon. (single past achievement) → ✅ I was able to finish the marathon."
      ],
      decisionTree: [
        "1. Is it about physical/mental ability? → Can (present) / Could (past general) / Was able to (specific past achievement)",
        "2. Is it about asking or giving permission? → Can (informal) / May (formal) / Could (polite)",
        "3. Is it a rule imposed by someone else? → Have to. Is it your own personal feeling? → Must",
        "4. Is something forbidden? → Mustn't. Is something simply unnecessary? → Don't have to",
        "5. Is it general advice? → Should/Ought to. Is it a stronger warning? → Had better",
        "6. Are you making a deduction about NOW? → Must (certain) / Might/Could (possible) / Can't (certain it's false)",
        "7. Are you making a deduction about the PAST? → modal + have + past participle"
      ],
      quickCheck: [
        { q: "I ___ speak three languages.", a: "can", why: "present ability." },
        { q: "You ___ smoke in this building. (forbidden)", a: "mustn't", why: "prohibition." },
        { q: "You ___ come to the party if tired. (optional)", a: "don't have to", why: "not necessary, but allowed." },
        { q: "He ___ be tired — he's been working all day.", a: "must", why: "logical deduction, strong certainty." },
        { q: "She ___ forgotten about the meeting. (past deduction)", a: "must have", why: "past modal of deduction." },
        { q: "You ___ (mustn't/don't have to) worry about the cost \u2014 it's covered.", a: "don't have to", why: "\"don't have to\" means it's not necessary, not forbidden." }
      ]
    }
  },
  {
    id: "adjectives",
    name: "Adjectives",
    subtitle: "Word order, comparison, and commas",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Adjectives seem simple until you stack more than one in front of a noun — English has a surprisingly strict order for that, plus irregular comparison forms and comma rules that trip up even confident learners. Get the order right, and your descriptions sound natural instead of just technically correct.",
      sections: [
        {
          title: "Adjective Order",
          rules: [
            {
              title: "The Standard Order",
              body: "When multiple adjectives describe one noun, they follow a conventional order: opinion, size, physical observation (texture/shape you can feel or see), age, shape, color, origin, material, purpose.",
              examples: ["a beautiful small smooth old round black Italian wooden dining table", "a lovely little new (opinion-size-age) house", "a sturdy plastic (physical observation-material) chair"]
            },
            {
              title: "Hyphenated Number + Unit Adjectives",
              body: "When you combine a number and a unit into one adjective before a noun, add a hyphen and keep the unit singular — never plural.",
              examples: ["a five-year-old niece (NOT five-years-old)", "a two-day-old kitten", "a one-hour meeting"]
            },
            {
              title: "-ish for \"Kind Of\"",
              body: "Add -ish to a color (or some other adjectives) to mean 'not exactly, but close to.'",
              examples: ["reddish, blueish, greenish", "I bought pinkish curtains. (not quite pink, close to it)"]
            },
            {
              title: "Noun-As-Adjective Exceptions",
              body: "Sometimes a color or size word is actually part of a fixed name/noun (like 'green card' or 'giant squid'), not a describing adjective. In that case, it stays attached to the noun and other adjectives go BEFORE it, even if that breaks the usual order.",
              examples: ["an American green card (NOT green American card — 'green card' is one fixed term)", "a young giant squid (NOT giant young squid — 'giant squid' is the animal's name)"]
            }
          ]
        },
        {
          title: "Commas With Multiple Adjectives",
          rules: [
            {
              title: "Cumulative Adjectives — No Commas",
              body: "When adjectives follow the standard order above (opinion, size, age...), they're called cumulative adjectives and need NO commas between them.",
              examples: ["I brought my new colorful sun umbrella. (size-opinion-purpose order, no commas)"]
            },
            {
              title: "Coordinate Adjectives — Use Commas",
              body: "When two adjectives are the same TYPE (both opinions, for example) and have equal value, they're coordinate adjectives and need a comma between them. Test: can you swap their order, or replace the comma with 'and,' and it still sounds fine? If yes, use a comma.",
              examples: ["It was a dark, stormy night. (both describe the mood equally — 'dark and stormy' works)", "Adam gave a funny, entertaining speech. (both opinions — could also say 'entertaining, funny')"]
            }
          ]
        },
        {
          title: "Comparatives & Superlatives",
          rules: [
            {
              title: "Regular Forms",
              body: "Short adjectives (1 syllable, some 2) add -er/-est. Longer adjectives use more/most.",
              examples: ["tall → taller → tallest", "beautiful → more beautiful → most beautiful"]
            },
            {
              title: "Irregular Forms",
              body: "A few common adjectives have unique comparative/superlative forms.",
              examples: ["good → better → best", "bad → worse → worst", "far → further/farther → furthest/farthest"]
            }
          ]
        },
        {
          title: "-ed vs -ing Adjectives",
          rules: [
            {
              title: "-ed Describes a Feeling, -ing Describes the Cause",
              body: "-ed adjectives describe how someone feels; -ing adjectives describe the thing/situation causing that feeling.",
              examples: ["I am bored. (how I feel) vs The movie is boring. (what causes the feeling)", "She was interested in the topic. vs The topic was interesting."],
              mistake: "❌ I am boring. (this means YOU cause boredom in others, not that you feel bored)"
            }
          ]
        }
      ],
      mistakes: [
        "❌ black big dog → ✅ big black dog (size before color)",
        "❌ more tall → ✅ taller (short adjectives use -er, not 'more')",
        "❌ I am boring. (meant to say bored) → ✅ I am bored.",
        "❌ five-years-old niece → ✅ five-year-old niece (unit stays singular in hyphenated adjectives)",
        "❌ green American card → ✅ American green card ('green card' is a fixed noun, stays together)",
        "❌ my new, colorful, sun umbrella → ✅ my new colorful sun umbrella (cumulative adjectives, no commas)"
      ],
      decisionTree: [
        "1. Multiple adjectives before one noun? → Order: opinion, size, physical observation, age, shape, color, origin, material, purpose",
        "2. Is the color/size word actually part of a fixed noun (green card, giant squid)? → Keep it attached, put other adjectives before it",
        "3. Are the adjectives the same TYPE and equal in value? → Coordinate adjectives, use a comma. Otherwise → cumulative, no comma",
        "4. Combining a number + unit into one adjective? → Hyphenate it, keep the unit singular",
        "5. Describing how YOU feel? → Use the -ed form. Describing what CAUSES that feeling? → Use the -ing form",
        "6. Is the adjective 1-2 syllables? → add -er/-est. Longer? → use more/most"
      ],
      quickCheck: [
        { q: "I am ___ (bored/boring) with this movie.", a: "bored", why: "describes how you feel, uses -ed form." },
        { q: "This book is really ___ (interested/interesting).", a: "interesting", why: "describes what causes the feeling, uses -ing form." },
        { q: "It's a beautiful small ___ (old/small) house. (correct order?)", a: "beautiful small old house", why: "adjective order: opinion, size, age." },
        { q: "My niece is a ___ (five-year-old/five-years-old).", a: "five-year-old", why: "hyphenated number+unit adjectives keep the unit singular." },
        { q: "Lucas has an American ___ (green card/card green).", a: "green card", why: "'green card' is a fixed noun, so 'American' goes before it, not between." },
        { q: "It was a dark ___ stormy night. (comma or no comma?)", a: ",", why: "coordinate adjectives of equal value need a comma." }
      ]
    }
  },
  {
    id: "adverbs",
    name: "Adverbs",
    subtitle: "Forming, placing, and choosing the right adverb",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Adverbs describe HOW an action happens, and while many are formed simply by adding -ly to an adjective, knowing when to use an adverb instead of an adjective — and getting the classic 'good vs well' pair right — is what separates natural-sounding English from noticeably foreign-sounding English.",
      sections: [
        {
          title: "Adjective vs Adverb Form",
          rules: [
            {
              title: "Adverbs Describe Verbs, Adjectives, or Other Adverbs",
              body: "Adjectives describe nouns; adverbs (often ending in -ly) describe verbs, adjectives, or other adverbs. A common mistake is using the adjective form where an adverb is needed.",
              examples: ["❌ She sings beautiful. → ✅ She sings beautifully.", "❌ He drives careful. → ✅ He drives carefully.", "That was a really impressive performance. (adverb 'really' modifies the adjective 'impressive')"]
            }
          ]
        },
        {
          title: "Good vs Well",
          rules: [
            {
              title: "\"Good\" Is an Adjective, \"Well\" Is Usually an Adverb",
              body: "\"Good\" describes nouns; \"well\" describes verbs — except when \"well\" describes health, where it acts as an adjective.",
              examples: ["She is a good singer. (adjective + noun)", "She sings well. (adverb + verb)", "I don't feel well. (health = adjective use)"]
            }
          ]
        },
        {
          title: "Comparing Adverbs",
          rules: [
            {
              title: "Most Adverbs Use \"More/Most\"",
              body: "Longer -ly adverbs use more/most, just like longer adjectives. A few short, common adverbs have irregular comparative forms.",
              examples: ["She explained it more clearly than before.", "well → better → best", "badly → worse → worst"]
            }
          ]
        },
        {
          title: "Where Adverbs Go in a Sentence",
          rules: [
            {
              title: "Placement Depends on the Type of Adverb",
              body: "Adverbs of manner (how) usually go after the verb or object. Adverbs of frequency (how often) usually go before the main verb, but after 'be'. Adverbs of degree (how much) go before the word they modify.",
              examples: ["She completed the task quickly. (manner, after the object)", "He usually arrives on time. (frequency, before the main verb)", "He is usually on time. (frequency, after 'be')", "This is extremely difficult. (degree, before the adjective)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ She sings beautiful. → ✅ She sings beautifully.",
        "❌ She did good on the test. → ✅ She did well on the test.",
        "❌ He arrives usually on time. → ✅ He usually arrives on time.",
        "❌ more good → ✅ better (irregular comparative)"
      ],
      decisionTree: [
        "1. Are you describing a verb, adjective, or another adverb? → Use an adverb (often -ly)",
        "2. Talking about skill/quality? → 'good' (adjective). Talking about how something is done, or health? → 'well' (adverb, or adjective for health)",
        "3. Comparing adverbs? Short/irregular (well, badly)? → better/worse. Longer -ly adverbs? → more/most",
        "4. What type of adverb is it? Manner → after verb/object. Frequency → before main verb (after 'be'). Degree → before the word it modifies"
      ],
      quickCheck: [
        { q: "She sings ___ (beautiful/beautifully).", a: "beautifully", why: "an adverb is needed to describe the verb 'sings'." },
        { q: "She did ___ (good/well) on the exam.", a: "well", why: "adverb needed to describe how she performed." },
        { q: "That was a ___ (real/really) impressive performance.", a: "really", why: "an adverb is needed to modify the adjective 'impressive'." },
        { q: "He ___ (usual/usually) arrives at 9am.", a: "usually", why: "frequency adverbs go before the main verb." },
        { q: "She explained the plan ___ (clear/clearly) than last time.", a: "more clearly", why: "longer -ly adverbs use 'more' for comparison." },
        { q: "I don't feel ___ (good/well) today.", a: "well", why: "for health, 'well' is used even though it looks like an adverb." }
      ]
    }
  },
  {
    id: "prepositions",
    name: "Prepositions",
    subtitle: "Time, place, movement, and dependent prepositions",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Prepositions are widely considered the hardest part of English grammar to master — not because the concept is complex, but because usage is often arbitrary and must be memorized case by case rather than derived from logic. Native speakers say 'interested IN' and 'good AT' without ever thinking about why; as a learner, building this same automatic instinct takes deliberate exposure and repetition.",
      sections: [
        {
          title: "Prepositions of Time — In, On, At",
          rules: [
            {
              title: "The Big-to-Small Pattern",
              body: "Think of time periods from biggest to smallest: In = long periods (months, years, decades, centuries, seasons, parts of the day). On = days and specific dates. At = exact clock times and meal times.",
              examples: ["in July, in 2020, in the 1990s, in the morning", "on Monday, on the 5th of May, on Christmas Day", "at 6pm, at noon, at lunchtime"]
            },
            {
              title: "Night Is Special",
              body: "\"At night\" refers to the general time period (like in the morning/evening). \"In the night\" emphasizes something happening DURING that period — a specific event.",
              examples: ["I sleep well at night. (general period, like 'in the morning')", "I heard a noise in the night. (something specific happened during the night)"]
            }
          ]
        },
        {
          title: "How Long? For, Since, From, Until, By, During, Within",
          rules: [
            {
              title: "For (Duration) vs Since (Starting Point)",
              body: "\"For\" answers HOW LONG. \"Since\" answers WHEN something started (and continues to now).",
              examples: ["I've lived here for 5 years. (duration)", "I've lived here since 2020. (starting point)"]
            },
            {
              title: "Since vs From",
              body: "\"Since\" implies a connection to the present (or another point) — the action continues. \"From\" just marks a starting point in time with no such connection.",
              examples: ["I've had a headache since Monday. (still true now)", "We serve breakfast from 6am. (just states when it starts)"]
            },
            {
              title: "Until/Till (Action Stops) vs By (Deadline)",
              body: "\"Until\" means an action continues up to that point, then stops. \"By\" means something must be completed AT OR BEFORE that point — think deadline.",
              examples: ["I'm working until 5. (I stop at 5)", "Finish the report by Friday. (anytime before or on Friday is fine)"]
            },
            {
              title: "During (Within a Period) vs While (+ Clause)",
              body: "\"During\" is followed by a noun. If you need a subject + verb, use \"while\" instead.",
              examples: ["✅ During the meeting, he left. (noun)", "❌ During I was driving, I saw Ben. → ✅ While I was driving, I saw Ben."]
            },
            {
              title: "Within (A Time Limit)",
              body: "\"Within\" + a length of time means \"no later than\" — a strict limit, unlike \"for,\" which just tells you how long something lasted.",
              examples: ["We sailed for 2 hours. (just how long)", "Finish the race within 2 hours. (that's the limit — a deadline for a duration)"]
            }
          ]
        },
        {
          title: "Prepositions of Place",
          rules: [
            {
              title: "In, On, At — Place",
              body: "In = enclosed spaces (also countries/cities, biggest to smallest). On = surfaces (also streets). At = specific points/addresses (smallest — think: country > street > address).",
              examples: ["in the box, in London", "on the table, on Baker Street", "at the door, at 32 Baker Street"]
            },
            {
              title: "Next To / Beside / Near / By",
              body: "\"Next to\" and \"beside\" mean touching or almost touching. \"Near\" means close, but with more distance. \"By\" can mean either, but usually emphasizes a short distance.",
              examples: ["My cup is next to my book. (touching/very close)", "The table is near the window. (close, but some distance)"]
            },
            {
              title: "Between vs Among",
              body: "\"Between\" is used for two things (in the middle of two). \"Among\" is used for a group of three or more (surrounded by, or part of a group).",
              examples: ["The book is between the cup and the bag. (two things)", "The cabin is among the trees. (surrounded by many)", "I am the tallest among my friends. (part of a group)"]
            },
            {
              title: "In Front Of vs Opposite/Across From",
              body: "\"Opposite\" (or \"across from\") means two things face each other. \"In front of\" just means positioned before something, without necessarily facing it.",
              examples: ["Jenny's office is opposite mine. (facing each other)", "Please don't park in front of my door."]
            },
            {
              title: "Over/Above vs Under/Below",
              body: "\"Over\" and \"under\" often involve touching or covering. \"Above\" and \"below\" describe separate levels, with no contact.",
              examples: ["Put the tarp over the boat. (touching, covering)", "A family lives above me. (a different level, no contact)"]
            },
            {
              title: "Fixed Exceptions — Memorize These",
              body: "A handful of common phrases don't follow the usual in/on/at logic and must be memorized individually.",
              examples: ["at home (never 'in home')", "in school (in the education system) vs at school (physically in the building right now)", "in the hospital (as a patient) vs at the hospital (visiting/doing something there)", "in bed (sleeping/lying down) vs on the bed (something placed on top)"]
            },
            {
              title: "Transportation — On vs In",
              body: "Use \"on\" for vehicles you can walk around in or sit on top of (bus, train, plane, bike). Use \"in\" for small enclosed vehicles where you can't move around (car, taxi).",
              examples: ["on the bus, on the train, on a bicycle", "in the car, in a taxi"]
            }
          ]
        },
        {
          title: "Prepositions of Movement",
          rules: [
            {
              title: "From...To / Away From / Toward",
              body: "\"From...to\" marks start and end points. \"Away from\" means leaving a place; \"toward\" means moving in that direction (not necessarily arriving there).",
              examples: ["I walked from home to work.", "I walked away from my house and toward the bus stop."]
            },
            {
              title: "Into / Out Of, Onto / Off",
              body: "These are opposite pairs: into = entering, out of = exiting; onto = moving on top of something, off = moving down/away from it.",
              examples: ["The cat jumped into the box.", "The cat jumped out of the basket.", "The cat jumped onto the table.", "The cat jumped off the couch."]
            },
            {
              title: "Through, Across, Along, Past",
              body: "\"Through\" means traveling in the middle of something. \"Across\" means from one side to the other (often side-to-side). \"Along\" means following the length of something. \"Past\" means moving by something and continuing on.",
              examples: ["We drove through the tunnel.", "She swam across the river.", "They walked along the beach.", "I walked past the bakery."]
            },
            {
              title: "Over/Under (Movement) vs Around",
              body: "\"Over\" and \"under\" describe up-and-down movement across an obstacle. \"Around\" means moving on the outside of something, avoiding it directly.",
              examples: ["The children climbed over the fence.", "I walked around the puddle."]
            }
          ]
        },
        {
          title: "Dependent Prepositions",
          rules: [
            {
              title: "Adjective + Preposition",
              body: "Certain adjectives are always paired with a specific preposition — must be memorized.",
              examples: ["interested in, good at, afraid of, proud of, worried about, similar to"]
            },
            {
              title: "Verb + Preposition",
              body: "Certain verbs are always paired with a specific preposition.",
              examples: ["depend on, believe in, apologize for, consist of, rely on, deal with"]
            },
            {
              title: "Common Prepositional Errors",
              body: "Many learners transfer preposition patterns from their native language, which often don't match English usage.",
              examples: ["❌ married with → ✅ married to", "❌ discuss about → ✅ discuss (no preposition needed)", "❌ good in → ✅ good at"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ I was born in Monday. → ✅ I was born on Monday.",
        "❌ married with someone → ✅ married to someone",
        "❌ discuss about the plan → ✅ discuss the plan (no preposition)",
        "❌ good in mathematics → ✅ good at mathematics",
        "❌ depend of → ✅ depend on",
        "❌ in home → ✅ at home (fixed exception)",
        "❌ During I was driving, I saw Ben. → ✅ While I was driving, I saw Ben. (during + noun, while + clause)",
        "❌ I waited during 30 minutes. → ✅ I waited for 30 minutes. ('during' is not used for a length of time)",
        "❌ in a bus → ✅ on a bus (vehicles you can move around in)"
      ],
      decisionTree: [
        "1. Talking about a month, year, decade, season, or part of the day? → in",
        "2. Talking about a specific day or date? → on",
        "3. Talking about a specific clock time or meal time? → at",
        "4. Telling HOW LONG something lasts? → for. Telling WHEN it started (still true now)? → since",
        "5. Does the action stop at this point? → until/till. Must it be done AT OR BEFORE this point? → by",
        "6. Followed by a noun (a period)? → during. Followed by a subject + verb? → while",
        "7. Describing an enclosed space (or country/city)? → in. A surface (or street)? → on. A specific point/address? → at",
        "8. Two things facing each other? → opposite/across from. A group of 3+? → among. Just two things? → between",
        "9. Is it a fixed exception (at home, in/at school, in/at hospital, in/on bed)? → memorize individually, don't apply the general rule",
        "10. Is it an adjective or verb with a FIXED preposition (interested in, depend on)? → memorize individually"
      ],
      quickCheck: [
        { q: "I was born ___ 1998.", a: "in", why: "years take 'in'." },
        { q: "The meeting is ___ Monday.", a: "on", why: "specific days take 'on'." },
        { q: "We'll meet ___ 6pm.", a: "at", why: "specific clock times take 'at'." },
        { q: "I've lived here ___ (for/since) 2020.", a: "since", why: "'since' marks the starting point; 'for' would answer how long." },
        { q: "Finish the report ___ (until/by) Friday.", a: "by", why: "'by' means a deadline — done at or before that point." },
        { q: "She is interested ___ art.", a: "in", why: "'interested' pairs with 'in' as a fixed expression." }
      ]
    }
  },
  {
    id: "conjunctions-linking",
    name: "Conjunctions & Linking Words",
    subtitle: "Connecting ideas clearly and naturally",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Linking words are what separate choppy, disconnected sentences from smooth, sophisticated writing. Native speakers use a rich variety of connectors (however, therefore, despite, moreover) to guide the reader through their logic — and IELTS examiners specifically look for this range and accuracy when scoring Writing and Speaking, making this one of the highest-value topics to master well.",
      sections: [
        {
          title: "Coordinating & Subordinating Conjunctions",
          rules: [
            {
              title: "Coordinating Conjunctions (FANBOYS)",
              body: "For, and, nor, but, or, yet, so — join two independent clauses of equal weight.",
              examples: ["She studied hard, so she passed.", "He wanted to go, but he was too tired."]
            },
            {
              title: "Subordinating Conjunctions",
              body: "Because, although, since, if, when, while — join a dependent clause to an independent one.",
              examples: ["Although it was raining, we went for a walk.", "She left early because she felt unwell."]
            }
          ]
        },
        {
          title: "Linking Words by Function",
          rules: [
            {
              title: "Contrast",
              body: "However, despite, in spite of, on the other hand, nevertheless.",
              examples: ["The plan was risky. However, it succeeded.", "Despite the rain, the event continued."]
            },
            {
              title: "Cause & Effect",
              body: "Therefore, as a result, consequently, due to.",
              examples: ["Prices rose sharply. As a result, demand fell."]
            },
            {
              title: "Addition",
              body: "Moreover, furthermore, in addition, also.",
              examples: ["The plan is cost-effective. Moreover, it is environmentally friendly."]
            },
            {
              title: "Sequencing",
              body: "Firstly, subsequently, then, finally.",
              examples: ["Firstly, gather the ingredients. Then, preheat the oven."]
            }
          ]
        },
        {
          title: "Casual vs Formal Equivalents",
          rules: [
            {
              title: "Same Function, Different Register",
              body: "Many linking words have a casual, everyday version and a more formal/professional equivalent that expresses the exact same relationship between ideas. Using formal words in casual speech can sound stiff; using casual words in formal writing can sound less polished.",
              examples: [
                "Addition: and → as well as (\"Popular in summer and winter\" → \"Popular in summer as well as winter\")",
                "Contrast: but → whereas (\"It's busy but quiet in the evening\" → \"It's busy, whereas it's quiet in the evening\")",
                "Alternatives: or → either...or (\"Coffee or tea?\" → \"Either coffee or tea, I don't mind\")",
                "Reason → Result: so → as a result (\"The weather is nice, so tourists come\" → \"The weather is nice, and as a result, tourists come\" — note: add 'and' before 'as a result' mid-sentence)",
                "Result → Reason (reason first, extra focus): because → since (\"Because the weather is nice, tourists come\" → \"Since the weather is nice, tourists come\")",
                "Examples: like → such as / for example (\"I love food like pasta\" → \"I love food such as pasta\")",
                "Emphasis: especially (adds emphasis to ONE thing in a list) vs in fact (introduces a surprising or extra detail) — \"The food was great, especially the seafood.\" / \"The food was great. In fact, it was the best I've had all year.\""
              ]
            },
            {
              title: "Grammar Notes for These Pairs",
              body: "\"Or\" and \"either...or\" must connect two of the SAME grammatical type (two nouns, two verbs, or two clauses). \"Like\" and \"such as\" are followed by a noun or gerund (-ing form), never a plain verb.",
              examples: ["✅ Either you drive, or I'll take a taxi. (two clauses)", "❌ I love activities like to hike. → ✅ I love activities like hiking."]
            }
          ]
        },
        {
          title: "Common Errors With Linking Words",
          rules: [
            {
              title: "Punctuation With Linking Words",
              body: "Words like 'however' and 'therefore' typically need a semicolon or full stop before them, and a comma after — they cannot simply replace a comma between two full sentences.",
              examples: ["❌ It was raining, however we continued. → ✅ It was raining; however, we continued.", "❌ It was raining, however we continued. → ✅ It was raining. However, we continued."]
            },
            {
              title: "Despite vs Although",
              body: "\"Despite\" is followed by a noun or gerund, not a full clause. \"Although\" is followed by a full clause.",
              examples: ["Despite the rain, we went out. (noun)", "Despite raining heavily, we went out. (gerund)", "Although it was raining, we went out. (full clause)"],
              mistake: "❌ Despite it was raining... → ✅ Although it was raining... OR Despite the rain..."
            }
          ]
        }
      ],
      mistakes: [
        "❌ It was raining, however we went out. → ✅ It was raining; however, we went out.",
        "❌ Despite it was raining, we went out. → ✅ Although it was raining, we went out.",
        "❌ Because of she was late, the meeting started without her. → ✅ Because she was late...",
        "❌ In spite the rain, we went out. → ✅ In spite OF the rain, we went out."
      ],
      decisionTree: [
        "1. Joining two equal, independent ideas? → Coordinating conjunction (and, but, so)",
        "2. Making one idea dependent on another? → Subordinating conjunction (because, although, if)",
        "3. Showing contrast between sentences? → However, nevertheless, on the other hand",
        "4. Showing a result? → Therefore, as a result, consequently",
        "5. Is the linking word followed by a full clause (subject + verb)? → Use although/because/since",
        "6. Is it followed by just a noun or gerund? → Use despite/in spite of/due to"
      ],
      quickCheck: [
        { q: "She studied hard, ___ she passed.", a: "so", why: "coordinating conjunction showing result." },
        { q: "___ it was raining, we went out. (followed by a full clause)", a: "Although", why: "'although' is followed by a full clause." },
        { q: "Formal version of 'and': Popular in summer ___ winter.", a: "as well as", why: "'as well as' is the more formal equivalent of 'and' for adding information." },
        { q: "Formal version of 'but': It's busy in the day, ___ it's quiet at night.", a: "whereas", why: "'whereas' is the more formal way to show contrast." },
        { q: "I love foods ___ pasta and rice. (formal, = for example)", a: "such as", why: "'such as' is the more formal equivalent of 'like' when giving examples, and takes a noun." },
        { q: "The project was late. ___, the client was satisfied with the result.", a: "Nevertheless", why: "shows contrast between two full sentences, needs a capital letter and comma after." }
      ]
    }
  },
  {
    id: "relative-clauses",
    name: "Relative Clauses",
    subtitle: "Defining and non-defining clauses",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Relative clauses let you pack extra information about a noun into the same sentence instead of writing two separate, choppy sentences — this is a major marker of fluent, natural-sounding English. The key skill is knowing whether that extra information is essential (defining) or just additional detail (non-defining), since this single distinction changes both your punctuation and which relative pronouns are even allowed.",
      sections: [
        {
          title: "Defining Relative Clauses",
          rules: [
            {
              title: "Essential Information, No Commas",
              body: "Defining clauses identify exactly which person/thing is being talked about. No commas are used, and 'that' can replace who/which.",
              examples: ["The man who called me is my manager.", "The book that I bought is excellent.", "The house where I grew up was sold."]
            }
          ]
        },
        {
          title: "Non-Defining Relative Clauses",
          rules: [
            {
              title: "Extra Information, Uses Commas",
              body: "Non-defining clauses add extra, non-essential detail. They require commas, and 'that' CANNOT be used.",
              examples: ["My brother, who lives in London, is visiting next week.", "The Eiffel Tower, which was built in 1889, attracts millions of visitors."],
              mistake: "❌ My brother, that lives in London... → ✅ My brother, who lives in London..."
            }
          ]
        },
        {
          title: "Relative Pronouns & Reduced Clauses",
          rules: [
            {
              title: "Choosing the Right Pronoun",
              body: "Who/whom = people. Which = things. Whose = possession. Where = places. When = times.",
              examples: ["the woman whose car was stolen", "the year when I graduated", "the city where she was born"]
            },
            {
              title: "Reduced Relative Clauses",
              body: "In some cases, the relative pronoun and 'be' verb can be omitted, especially with passive or -ing forms.",
              examples: ["The book written by her (= that was written by her)", "The man standing there (= who is standing there)"]
            }
          ]
        },
        {
          title: "Omitting the Relative Pronoun",
          rules: [
            {
              title: "You Can Omit It Only If It's the OBJECT of the Clause",
              body: "In a defining clause, check whether the relative pronoun is the subject or object of the clause's verb. If it's the object, you can drop it entirely. If it's the subject, you must keep it.",
              examples: ["People are still talking about the dish (that) you brought. (OBJECT of 'brought' — you brought the dish — can be omitted)", "Please sign the lines that have an X on them. (SUBJECT of 'have' — cannot be omitted)"],
              mistake: "❌ Please sign the lines have an X on them. (subject pronoun removed — sounds broken)"
            },
            {
              title: "Who vs Whom",
              body: "'Who' is the subject form (does the action); 'whom' is the object form (receives the action). In casual spoken English, 'who' is now commonly used for both, and 'whom' is fading from everyday speech — but it still appears in formal writing.",
              examples: ["Jared was a prisoner who always broke the rules. ('who' = subject of 'broke')", "Jared was a prisoner whom everyone feared. ('whom' = object of 'feared')"]
            }
          ]
        },
        {
          title: "Which Referring to a Whole Idea",
          rules: [
            {
              title: "Non-Defining 'Which' Can Refer Back to the Entire Previous Clause",
              body: "Instead of describing just one noun, 'which' can sometimes refer to the whole situation or idea that came before it.",
              examples: ["My boss let us leave early because of the storm, which I thought was a good idea. (which = the whole idea of letting people leave early, not just 'storm')"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ My brother, that lives in London... → ✅ My brother, who lives in London...",
        "❌ The book, who I bought, is excellent. → ✅ The book that/which I bought is excellent.",
        "❌ The book I bought, is excellent. (unnecessary comma in defining clause) → ✅ The book I bought is excellent.",
        "❌ My sister who lives in Paris (implying I have multiple sisters, unintended) — check if commas are needed based on meaning."
      ],
      decisionTree: [
        "1. Is the clause necessary to identify WHICH person/thing you mean? → Defining clause, no commas",
        "2. Is the clause just extra, non-essential detail? → Non-defining clause, use commas",
        "3. Does the clause refer to a person? → who/whom (or that, in defining clauses only)",
        "4. Does it refer to a thing? → which (or that, in defining clauses only)",
        "5. Does it show possession? → whose",
        "6. Is 'that' being used in a non-defining clause? → Not allowed — must use who/which instead"
      ],
      quickCheck: [
        { q: "The man ___ called me is my manager. (defining)", a: "who", why: "defining clause, refers to a person." },
        { q: "My brother, ___ lives in London, is visiting. (non-defining)", a: "who", why: "non-defining clause about a person uses 'who', not 'that'." },
        { q: "The book ___ I bought is excellent. (defining, either who/which/that acceptable)", a: "that", why: "'that' is commonly used in defining clauses referring to things." },
        { q: "This is the house ___ I grew up.", a: "where", why: "refers to a place." },
        { q: "The woman ___ car was stolen called the police.", a: "whose", why: "shows possession." },
        { q: "The laptop, ___ I bought last year, has already broken.", a: "which", why: "non-defining clause about a thing uses 'which', never 'that'." }
      ]
    }
  },
  {
    id: "conditionals",
    name: "Conditionals",
    subtitle: "Zero, first, second, third",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Conditionals let you talk about cause and effect across different levels of reality — from scientific facts that are always true, to realistic future possibilities, to pure hypotheticals, to imagined alternate pasts. Native speakers switch fluidly between these forms because each one signals something different about how likely or real a situation is — using the wrong conditional doesn't just sound odd, it can genuinely misrepresent what you mean.",
      sections: [
        {
          title: "Zero & First Conditional",
          rules: [
            {
              title: "Zero Conditional — General Truths",
              body: "If + present simple, present simple. Facts always true.",
              examples: ["If you heat water to 100°C, it boils.", "If you don't water plants, they die."]
            },
            {
              title: "First Conditional — Real Future Possibility",
              body: "If + present simple, will + base verb. Realistic future situations.",
              examples: ["If it rains tomorrow, I will stay home.", "If you study hard, you will pass the exam."],
              mistake: "Using 'will' in the if-clause: \"If it will rain\" is wrong → \"If it rains.\""
            },
            {
              title: "If vs When",
              body: "In the zero/first conditional, 'if' suggests the condition might or might not happen. 'When' suggests you're certain or expecting it to happen.",
              examples: ["If you get home late, call me. (maybe you'll be late)", "When you get home, call me. (I'm expecting you to get home)"]
            },
            {
              title: "Unless = If...Not",
              body: "'Unless' is a common alternative meaning 'if...not' — it introduces the one exception that would stop something from happening.",
              examples: ["If you don't get an invitation, you can't come. = Unless you get an invitation, you can't come.", "Unless this loads, I won't finish my work. (= If this doesn't load...)"]
            }
          ]
        },
        {
          title: "Second & Third Conditional",
          rules: [
            {
              title: "Second Conditional — Unreal Present/Future",
              body: "If + past simple, would + base verb. Hypothetical, unlikely, or imaginary situations.",
              examples: ["If I had a million dollars, I would travel the world.", "If I were you, I would take that job."]
            },
            {
              title: "Third Conditional — Unreal Past",
              body: "If + past perfect, would have + past participle. An imagined different past, often expressing regret.",
              examples: ["If I had studied harder, I would have passed the exam.", "If she had left earlier, she wouldn't have missed the train."]
            }
          ]
        },
        {
          title: "Mixed Conditionals, Wish & Would Rather",
          rules: [
            {
              title: "Mixed Conditionals",
              body: "Combines a past condition with a present result, or a present condition with a past result.",
              examples: ["If I had studied medicine, I would be a doctor now. (past → present)", "If she weren't so shy, she would have spoken up at the meeting. (present → past)"]
            },
            {
              title: "Wish / If Only",
              body: "Wish + past simple = present wish. Wish + past perfect = past regret. Wish + would = wanting someone's behavior to change.",
              examples: ["I wish I had more time. (now)", "I wish I had studied harder. (past regret)", "I wish you would stop interrupting me."]
            },
            {
              title: "Would Rather",
              body: "Would rather + base verb = personal preference. Would rather + subject + past simple = preference about someone else.",
              examples: ["I would rather stay home tonight.", "I'd rather you didn't tell him."]
            }
          ]
        }
      ],
      mistakes: [
        "❌ If it will rain... → ✅ If it rains...",
        "❌ If I would have money... → ✅ If I had money...",
        "❌ If I was you... → ✅ If I were you... (formal second conditional)",
        "❌ If I had studied, I would passed. → ✅ ...I would have passed.",
        "❌ I wish I have a car. (about now) → ✅ I wish I had a car.",
        "❌ I wish I had a car. (meaning past regret) → ✅ I wish I had bought a car."
      ],
      decisionTree: [
        "1. Is it a scientific fact or general truth? → Zero conditional (present + present)",
        "2. Is it a realistic future possibility? → First conditional (present + will)",
        "3. Is it hypothetical/unlikely about now or the future? → Second conditional (past + would)",
        "4. Is it an imagined different PAST? → Third conditional (past perfect + would have)",
        "5. Does it combine a past cause with a present result, or vice versa? → Mixed conditional",
        "6. Are you expressing regret or a wish? → Wish + past simple (now) or wish + past perfect (past regret)"
      ],
      quickCheck: [
        { q: "If you heat ice, it ___.", a: "melts", why: "zero conditional, scientific fact." },
        { q: "If it rains tomorrow, I ___ home.", a: "will stay", why: "first conditional, realistic future." },
        { q: "If I ___ you, I would apologize.", a: "were", why: "second conditional fixed expression." },
        { q: "If she had studied harder, she ___ the exam.", a: "would have passed", why: "third conditional, unreal past." },
        { q: "I wish I ___ harder for the exam. (past regret)", a: "had studied", why: "wish + past perfect for past regret." },
        { q: "If I ___ (know) her number, I would call her.", a: "knew", why: "second conditional if-clause uses past simple for a hypothetical present situation." }
      ]
    }
  },
  {
    id: "passive-voice",
    name: "Passive Voice",
    subtitle: "Active vs passive sentences",
    hasContent: true,
    videoUrl: null,
    transformFormat: true,
    lesson: {
      intro: "Active voice puts the doer first; passive voice puts the receiver of the action first — and native speakers switch to passive specifically when the doer is unknown, unimportant, or deliberately being downplayed (as in 'mistakes were made'). Passive voice is everywhere in academic writing, news reporting, and formal contexts, which makes it essential for IELTS Writing and any professional English.",
      sections: [
        {
          title: "Basic Structure & Tense Forms",
          rules: [
            {
              title: "The Core Formula",
              body: "subject (receiver) + be (correct tense) + past participle + (by + doer, optional)",
              examples: ["She writes the report. → The report is written (by her).", "She wrote the report. → The report was written (by her)."]
            },
            {
              title: "Passive Across Tenses",
              body: "The tense of \"be\" changes to match the original active sentence's tense.",
              examples: ["Present continuous: The report is being written.", "Present perfect: The report has been written.", "Future: The report will be written."]
            }
          ]
        },
        {
          title: "When and Why to Use Passive",
          rules: [
            {
              title: "Unknown, Obvious, or Unimportant Doer",
              body: "The most common real-world reason to use passive voice.",
              examples: ["My phone was stolen. (doer unknown)", "The road has been repaired. (doer obvious)", "Mistakes were made. (avoids blaming someone directly)"]
            },
            {
              title: "Formal & Academic Writing",
              body: "Passive voice is standard in scientific, academic, and news writing where the action matters more than the actor.",
              examples: ["The experiment was conducted over six weeks.", "The Eiffel Tower was built in 1889."]
            }
          ]
        },
        {
          title: "Modals, Reporting & Causative",
          rules: [
            {
              title: "Passive With Modal Verbs",
              body: "subject + modal + be + past participle",
              examples: ["The report must be finished by Friday.", "This medicine should be taken twice a day."]
            },
            {
              title: "Passive Reporting Structures",
              body: "Common in news and formal writing.",
              examples: ["It is said that the company will expand next year.", "The suspect is believed to have left the country."]
            },
            {
              title: "Causative — Have/Get Something Done",
              body: "Used when someone else performs an action FOR you, not by you.",
              examples: ["I had my hair cut yesterday. (a hairdresser did it)", "We are getting our house painted."],
              mistake: "\"I cut my hair yesterday\" implies you did it yourself. \"I had my hair cut\" means someone else did it for you."
            }
          ]
        },
        {
          title: "Recognizing True Passive & Its Limits",
          rules: [
            {
              title: "BE + Past Participle, Not BE + Adjective",
              body: "Just seeing a form of \"be\" isn't enough — check that the word after it is a genuine past participle (an action done to something), not an adjective describing a state.",
              examples: ["✅ This bottle has been opened. (opened = past participle, passive)", "❌ I have been tired for weeks. (tired = adjective describing a state, NOT passive, even though 'been' is there)"]
            },
            {
              title: "Intransitive Verbs Cannot Be Made Passive",
              body: "An intransitive verb has no object (arrive, sleep, happen, go). Since passive voice works by turning the object into the new subject, a verb with no object simply can't be passivized.",
              examples: ["✅ I bought a coffee. → A coffee was bought. (transitive, has an object)", "❌ I arrived late. → 'Late was arrived' (impossible — 'arrive' is intransitive, no object to promote)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ The report written by her. → ✅ The report was written by her. (missing 'be')",
        "❌ The cake was baking by my mother. → ✅ The cake was baked by my mother.",
        "❌ My phone was stolen by someone. → ✅ My phone was stolen. (unnecessary 'by' when doer is unknown)",
        "❌ I cut my hair. (meaning someone else did it) → ✅ I had my hair cut.",
        "❌ The letter was write yesterday. → ✅ The letter was written yesterday."
      ],
      decisionTree: [
        "1. Do you know who performed the action, and does it matter? → Active voice",
        "2. Is the doer unknown, obvious, or unimportant? → Passive voice",
        "3. Is this formal, academic, or scientific writing? → Passive voice is often preferred",
        "4. Is there a modal verb (must, should, can)? → modal + be + past participle",
        "5. Is someone else performing an action FOR the subject? → Causative (have/get + object + past participle)",
        "6. Converting active to passive: take the object → make it the new subject → add correct 'be' + past participle"
      ],
      quickCheck: [
        { q: "The meal ___ by the chef. (present simple passive)", a: "is cooked", why: "present simple passive structure." },
        { q: "The report ___ yesterday. (past simple passive)", a: "was written", why: "past simple passive structure." },
        { q: "This medicine ___ twice a day.", a: "should be taken", why: "passive with a modal verb." },
        { q: "It ___ that the company will expand next year.", a: "is said", why: "passive reporting structure." },
        { q: "I ___ my car repaired last week. (causative)", a: "had", why: "causative structure 'have something done'." },
        { q: "The results ___ (announce) tomorrow.", a: "will be announced", why: "future passive: will be + past participle." }
      ]
    }
  },
  {
    id: "reported-speech",
    name: "Reported Speech",
    subtitle: "Reporting what someone said",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Reported speech is how we relay what someone else said without quoting them directly — and it requires a whole set of systematic changes (tense backshift, pronoun shifts, time-word shifts) that native speakers apply automatically without noticing. This skill is essential for everyday storytelling ('she told me she was tired') and for academic paraphrasing, which makes it surprisingly high-value despite feeling like a niche grammar topic.",
      sections: [
        {
          title: "Tense Backshift & Pronoun Changes",
          rules: [
            {
              title: "Tense Backshift",
              body: "When the reporting verb (said, told) is past tense, the tense in the reported clause usually shifts back one step.",
              examples: ["\"I am tired.\" → She said she was tired.", "\"I will call you.\" → He said he would call me.", "\"I have finished.\" → She said she had finished."]
            },
            {
              title: "Pronoun & Time Word Changes",
              body: "Pronouns and time/place references often need to change to match the new speaker's perspective.",
              examples: ["\"I like your car.\" → He said he liked my car.", "\"We will meet tomorrow.\" → She said they would meet the next day."]
            }
          ]
        },
        {
          title: "Reported Questions, Commands & Requests",
          rules: [
            {
              title: "Reported Questions",
              body: "No question word order or question mark. Yes/No questions use 'if'/'whether'. Wh- questions keep the question word but use normal word order.",
              examples: ["\"Are you coming?\" → He asked if I was coming.", "\"Where do you live?\" → She asked where I lived."],
              mistake: "❌ She asked where did I live → ✅ She asked where I lived."
            },
            {
              title: "Reported Commands & Requests",
              body: "Use infinitive (to + base verb), not the original imperative form.",
              examples: ["\"Close the door.\" → He told me to close the door.", "\"Don't be late.\" → He told me not to be late."]
            }
          ]
        },
        {
          title: "Say vs Tell",
          rules: [
            {
              title: "Different Grammar Patterns",
              body: "\"Say\" is NOT followed directly by a person (use 'say to' if needed). \"Tell\" MUST be followed by the person being spoken to.",
              examples: ["✅ She said that she was tired. ❌ She said me that she was tired.", "✅ She said to me that she was tired.", "✅ She told me that she was tired. ❌ She told that she was tired."]
            }
          ]
        },
        {
          title: "Modal Verb Changes",
          rules: [
            {
              title: "Some Modals Backshift, Some Stay the Same",
              body: "Will→would, can→could, may (possibility)→might, may (permission)→could, must (obligation)→had to. But should, could, might, would, and ought to don't change. Must (speculation/certainty, like 'she must be tired') also stays as 'must'.",
              examples: ["\"I will attend.\" → She said she would attend.", "\"I can't swim.\" → He said he couldn't swim.", "\"You must pay for parking.\" → He said we had to pay for parking.", "\"She must be stuck in traffic.\" (speculation) → He said she must be stuck in traffic. (stays the same)"]
            }
          ]
        },
        {
          title: "When You DON'T Need to Backshift",
          rules: [
            {
              title: "Still True Now, or Hasn't Happened Yet",
              body: "If the information reported is still true at the time of reporting, or describes something in the future that hasn't happened yet, backshifting is optional — many speakers keep the original tense.",
              examples: ["\"I live in the UK.\" → She said (that) she lives in the UK. (still true now — no backshift needed)", "\"I'm flying to Canada next week.\" → He told me (that) he is flying to Canada. (hasn't happened yet — no backshift needed)"]
            }
          ]
        },
        {
          title: "Other Reporting Verbs",
          rules: [
            {
              title: "Beyond Said and Told",
              body: "Different reporting verbs carry different structures.",
              examples: ["Suggest + gerund: He suggested going to the beach.", "Deny + gerund: She denied taking the money.", "Advise + infinitive: He advised me to see a doctor.", "Insist + that clause: She insisted that she was right."]
            }
          ]
        }
      ],
      mistakes: [
        "❌ He said he is tired. → ✅ He said he was tired. (missing tense backshift)",
        "❌ She asked where did I live. → ✅ She asked where I lived.",
        "❌ He asked was I coming. → ✅ He asked if I was coming.",
        "❌ He told close the door. → ✅ He told me to close the door.",
        "❌ I said I like your car. (reported by someone else without pronoun change) → ✅ He said he liked my car."
      ],
      decisionTree: [
        "1. Is the reporting verb past tense (said/told)? → Backshift the tense one step",
        "2. Are there pronouns or time words referring to people/times? → Adjust them to the new perspective",
        "3. Is it a yes/no question? → Use 'if' or 'whether' + normal word order",
        "4. Is it a wh- question? → Keep the question word + normal word order (no inversion)",
        "5. Is it a command or request? → Use infinitive (to + base verb), not the imperative",
        "6. Special reporting verb (suggest/deny/admit)? → Check its specific required structure (usually gerund)"
      ],
      quickCheck: [
        { q: "\"I am tired,\" she said. → She said she ___ tired.", a: "was", why: "tense backshifts from present to past." },
        { q: "\"Are you coming?\" he asked. → He asked ___ I was coming.", a: "if", why: "yes/no questions use 'if'." },
        { q: "\"Where do you live?\" → She asked where I ___.", a: "lived", why: "reported questions use normal word order." },
        { q: "\"Close the door,\" he said. → He told me ___ the door.", a: "to close", why: "commands use infinitive form." },
        { q: "\"I will call you,\" she said. → She said she ___ call me.", a: "would", why: "'will' backshifts to 'would'." },
        { q: "\"I have never been to Japan,\" he said. \u2192 He said he ___ never been to Japan.", a: "had", why: "present perfect backshifts to past perfect in reported speech." }
      ]
    }
  },
  {
    id: "word-formation",
    name: "Word Formation",
    subtitle: "Prefixes, suffixes, and changing word forms",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Word formation is the hidden vocabulary-building skill that lets you expand your word choices dramatically without learning entirely new words — by recognizing how prefixes and suffixes transform a single root into a whole 'word family' (succeed → success → successful → successfully). This is directly tested in IELTS Reading and Use of English style questions, and it's one of the fastest ways to sound more sophisticated in writing.",
      sections: [
        {
          title: "Prefixes — Changing Meaning",
          rules: [
            {
              title: "Negative Prefixes",
              body: "Un-, in-, im-, dis-, non- typically reverse a word's meaning.",
              examples: ["happy → unhappy", "possible → impossible", "agree → disagree", "responsible → irresponsible"],
              mistake: "There's no single rule for which negative prefix applies — it must often be memorized (un-happy but in-visible, not un-visible)."
            },
            {
              title: "Other Common Prefixes",
              body: "Re- (again), pre- (before), over- (too much), under- (too little), mis- (wrongly).",
              examples: ["redo, rewrite", "preview, prepay", "overcook, overwork", "misunderstand, mislead"]
            }
          ]
        },
        {
          title: "Suffixes — Changing Word Class",
          rules: [
            {
              title: "Noun Suffixes",
              body: "-tion, -ment, -ness, -ity, -er/-or commonly turn verbs/adjectives into nouns.",
              examples: ["educate → education", "develop → development", "happy → happiness", "act → actor"]
            },
            {
              title: "Adjective Suffixes",
              body: "-ful, -less, -able, -ive, -al commonly turn nouns/verbs into adjectives.",
              examples: ["care → careful, careless", "afford → affordable", "create → creative", "nature → natural"]
            },
            {
              title: "Adverb Suffix",
              body: "-ly typically turns an adjective into an adverb.",
              examples: ["careful → carefully", "quick → quickly"]
            }
          ]
        },
        {
          title: "Traps Within a Word Family",
          rules: [
            {
              title: "Word Stress Often Shifts Between Forms",
              body: "When a word changes form, the stressed syllable frequently moves too — this affects pronunciation, not just spelling.",
              examples: ["PHOtograph → phoTOgrapher → photoGRAPHic", "POLitics → poLITical → poliTICian"]
            },
            {
              title: "Negative Prefix Exceptions",
              body: "A few common adjectives break the usual negative-prefix pattern — memorize these individually.",
              examples: ["patient → impatient (NOT unpatient)", "polite → impolite (NOT unpolite)"]
            },
            {
              title: "Same Root, Completely Different Meaning",
              body: "Sometimes the verb form of a word does NOT mean 'to do the noun' — it can mean something else entirely. This is a common trap.",
              examples: ["notice (noun) = an announcement, BUT notice (verb) = to observe something. To formally inform someone, use notify instead.", "❌ The landlord noticed us about the rent increase. → ✅ The landlord notified us about the rent increase."]
            },
            {
              title: "Not Every -er/-or Word Is a Person",
              body: "The agent-noun suffix (-er/-or) usually means 'a person who does this,' but some -er words are appliances or tools, not people.",
              examples: ["cook (verb) → a cook (person who cooks) — but a cooker is the stove/appliance, not a person!", "A chef is a trained professional cook — a more specific term than 'cook.'"]
            },
            {
              title: "Fixed Collocations With Word-Family Nouns",
              body: "Certain nouns formed from verbs are always paired with one specific verb — using the wrong pairing verb is a common error.",
              examples: ["make a decision (NOT 'do a decision')", "have a complaint / make a complaint", "be allergic to / be addicted to (adjective + fixed preposition)"]
            },
            {
              title: "The \"Make/Be + Adjective\" Trick",
              body: "Some adjectives simply don't have a natural one-word verb form. When that happens, use \"make + adjective\" (to cause something to become that way) or \"be + adjective\" (to exist in that state) instead of guessing a verb ending.",
              examples: ["honest (adjective) → no verb 'honesten' exists → be honest / make [someone] honest", "creative → be creative / make [something] more creative"]
            }
          ]
        },
        {
          title: "How New Words Enter English",
          rules: [
            {
              title: "Compounding, Blending & Clipping",
              body: "Compounding joins two whole words together. Blending merges parts of two words. Clipping shortens a longer word.",
              examples: ["Compounding: sun + flower → sunflower, book + shelf → bookshelf", "Blending: breakfast + lunch → brunch, smoke + fog → smog", "Clipping: advertisement → ad, examination → exam, telephone → phone"]
            },
            {
              title: "Acronyms vs Initialisms",
              body: "Both are formed from the first letters of a phrase. Acronyms are pronounced as a single new word. Initialisms are pronounced letter by letter.",
              examples: ["Acronym: NASA, laser (pronounced as words)", "Initialism: FBI, ATM (pronounced letter by letter)"]
            },
            {
              title: "Borrowing & Eponyms",
              body: "Borrowed words (loanwords) come from other languages. Eponyms are words named after a real person or place.",
              examples: ["Borrowed: café (French), piano (Italian), tsunami (Japanese)", "Eponym: sandwich (named after the Earl of Sandwich)"]
            }
          ]
        },
        {
          title: "Word Family Practice",
          rules: [
            {
              title: "Recognizing the Full Word Family",
              body: "Strong vocabulary means knowing all forms of a word — noun, verb, adjective, adverb — not just one.",
              examples: ["succeed (verb) → success (noun) → successful (adjective) → successfully (adverb)", "decide (verb) → decision (noun) → decisive (adjective) → decisively (adverb)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ unpossible → ✅ impossible (memorize which negative prefix applies)",
        "❌ succeedful → ✅ successful (the noun 'success' + -ful, not the verb + -ful)",
        "❌ He speak fluent. → ✅ He speaks fluently. (needs the adverb form to modify the verb)",
        "❌ a careful decision was make → ✅ a careful decision was made (verb form needed, not adjective)"
      ],
      decisionTree: [
        "1. Want to reverse a word's meaning? → Add a negative prefix (un-/in-/im-/dis-) — check which one is correct for that specific word",
        "2. Need a noun form of a verb/adjective? → Try -tion, -ment, -ness, -ity endings",
        "3. Need an adjective form? → Try -ful, -less, -able, -ive, -al endings",
        "4. Need an adverb to describe a verb? → Add -ly to the adjective form",
        "5. Unsure of the correct form? → Learn the full word family (verb/noun/adjective/adverb) together, not word by word"
      ],
      quickCheck: [
        { q: "happy → ___ (negative form)", a: "unhappy", why: "'un-' is the correct negative prefix for 'happy'." },
        { q: "possible → ___ (negative form)", a: "impossible", why: "'im-' is used before words starting with certain consonants like p." },
        { q: "educate → ___ (noun form)", a: "education", why: "-tion turns the verb into a noun." },
        { q: "care → ___ (adjective form)", a: "careful", why: "-ful turns the noun into an adjective." },
        { q: "quick → ___ (adverb form)", a: "quickly", why: "-ly turns the adjective into an adverb." },
        { q: "act \u2192 ___ (person who performs)", a: "actor", why: "-or/-er suffix creates an agent noun (someone who does the action)." }
      ]
    }
  },
  {
    id: "punctuation-capitalization",
    name: "Punctuation & Capitalization",
    subtitle: "Commas, apostrophes, and capital letters",
    hasContent: true,
    videoUrl: null,
    lesson: {
      intro: "Punctuation and capitalization might seem like minor technical details, but consistent errors here are one of the fastest ways to make otherwise strong writing look careless or unpolished. Native speakers rarely think consciously about comma placement or capitalization rules — but examiners and readers absolutely notice when these are wrong, making this a high-return area to get genuinely solid on.",
      sections: [
        {
          title: "Commas",
          rules: [
            {
              title: "Commas in Lists",
              body: "Separate three or more items in a list with commas. The comma before 'and' in the final item (the Oxford/serial comma) is optional — pick one style and stay consistent.",
              examples: ["I bought apples, oranges, and bananas. (with Oxford comma)", "I bought apples, oranges and bananas. (without — both are acceptable)"]
            },
            {
              title: "Commas With Introductory Phrases & Clauses",
              body: "Use a comma after an introductory word, phrase, or dependent clause.",
              examples: ["However, the results were surprising.", "Although it was raining, we went out."]
            },
            {
              title: "Commas With Non-Defining Clauses",
              body: "Non-essential extra information is set off with commas.",
              examples: ["My brother, who lives in London, is visiting."]
            }
          ]
        },
        {
          title: "Semicolons & Colons",
          rules: [
            {
              title: "Semicolons Join Two Related Independent Clauses",
              body: "A semicolon connects two complete sentences that are closely related, without needing a conjunction. It's also used before linking words like 'however' and 'therefore' when they connect two full sentences.",
              examples: ["I finished my homework; I went to bed early.", "It was raining heavily; however, we decided to go for a walk."]
            },
            {
              title: "Semicolons Also Separate Complex List Items",
              body: "When list items themselves contain commas, use semicolons to separate the items clearly.",
              examples: ["We visited Paris, France; Rome, Italy; and Cairo, Egypt."]
            },
            {
              title: "Colons Introduce Lists, Explanations, or Quotes",
              body: "A colon follows a complete sentence and introduces something that explains, lists, or elaborates on what came before.",
              examples: ["I need three things: eggs, milk, and bread.", "She had one goal: to win.", "He said something I'll never forget: \"Never give up.\""],
              mistake: "❌ I need: eggs, milk, and bread. (colon should follow a COMPLETE sentence, not come right after a verb)"
            }
          ]
        },
        {
          title: "Apostrophes",
          rules: [
            {
              title: "Possession",
              body: "Add 's to singular nouns, and just an apostrophe to plural nouns ending in -s.",
              examples: ["the student's book (one student)", "the students' books (multiple students)", "the children's toys (irregular plural, add 's)"]
            },
            {
              title: "Joint vs Separate Possession",
              body: "When two people own ONE thing together, add 's only to the last name. When they each own a SEPARATE thing, add 's to both names.",
              examples: ["Tom and Jerry's house. (they share one house)", "Tom's and Jerry's cars. (each has their own car)"]
            },
            {
              title: "Contractions",
              body: "Apostrophes replace missing letters in contractions.",
              examples: ["it's = it is / it has", "they're = they are", "don't = do not"],
              mistake: "❌ its vs it's — 'its' (no apostrophe) shows possession; 'it's' (with apostrophe) means 'it is' or 'it has'."
            }
          ]
        },
        {
          title: "Quotation Marks",
          rules: [
            {
              title: "Direct Speech & Titles",
              body: "Use quotation marks around someone's exact words, or around the titles of short works (articles, songs, poems, chapters). Punctuation like commas and periods usually go INSIDE the closing quotation mark in American English.",
              examples: ["She said, \"I'll be there at 6.\"", "Have you read the article \"Ten Tips for Better Sleep\"?", "American style: He said, \"I'm ready.\" (period inside quotes)"]
            }
          ]
        },
        {
          title: "Hyphens",
          rules: [
            {
              title: "Joining Compound Adjectives Before a Noun",
              body: "When two or more words combine to describe a noun that follows, hyphenate them. If the same words come AFTER the noun, no hyphen is needed.",
              examples: ["a well-known author (hyphenated, before the noun)", "The author is well known. (no hyphen, after the noun)", "a five-year-old child"]
            }
          ]
        },
        {
          title: "Capitalization",
          rules: [
            {
              title: "Basic Capitalization Rules",
              body: "Capitalize the first word of a sentence, proper nouns (names, places, nationalities), days, months, and titles. The pronoun \"I\" is always capitalized.",
              examples: ["Bangladesh, Monday, January, Doctor Smith, English (nationality/language)"]
            },
            {
              title: "Titles Before a Name vs General Job Terms",
              body: "A title is capitalized when it comes directly before someone's name (acting as part of the name). It's lowercase when used generally, without the name.",
              examples: ["President Biden spoke today. (title + name, capitalized)", "The president spoke today. (general reference, lowercase)"]
            },
            {
              title: "Common Capitalization Errors",
              body: "Seasons and general directions (north, south) are NOT capitalized unless part of a proper name or specific event title.",
              examples: ["❌ I love Winter. → ✅ I love winter.", "✅ North Korea (proper name) vs I live in the north. (general direction, lowercase)", "✅ the Winter Olympics (specific event name, capitalized)"]
            }
          ]
        }
      ],
      mistakes: [
        "❌ its raining outside. → ✅ it's raining outside. (contraction of 'it is')",
        "❌ The dog wagged it's tail. → ✅ The dog wagged its tail. (possession, no apostrophe)",
        "❌ I bought apples oranges and bananas. → ✅ I bought apples, oranges, and bananas. (missing commas)",
        "❌ I love Winter and Summer. → ✅ I love winter and summer. (seasons not capitalized)",
        "❌ the students book → ✅ the student's book (missing apostrophe for possession)",
        "❌ It was late, however we stayed. → ✅ It was late; however, we stayed. (semicolon needed before 'however' joining two full sentences)",
        "❌ I need: eggs and milk. → ✅ I need eggs and milk. OR I need two things: eggs and milk. (colon needs a complete sentence before it)",
        "❌ a well known author is well-known → ✅ a well-known author (before noun) / the author is well known (after noun, no hyphen)"
      ],
      decisionTree: [
        "1. Separating 3+ items in a list? → Use commas between each item",
        "2. Starting a sentence with an introductory word/phrase? → Add a comma after it",
        "3. Adding non-essential extra info about a noun? → Set it off with commas",
        "4. Joining two related full sentences with no conjunction (or before however/therefore)? → Use a semicolon",
        "5. Introducing a list, explanation, or quote after a COMPLETE sentence? → Use a colon",
        "6. Showing possession for ONE owner? → add 's. For MULTIPLE owners (plural ending in -s)? → add just an apostrophe. Two people sharing ONE thing? → 's on the last name only",
        "7. Is it a contraction (missing letters)? → Use an apostrophe (it's = it is)",
        "8. Quoting exact words or a short work's title? → Use quotation marks",
        "9. Combining words into one adjective BEFORE a noun? → Hyphenate. After the noun? → No hyphen",
        "10. Is it a proper noun, or a title directly before a name? → Capitalize it. General/common term? → Lowercase"
      ],
      quickCheck: [
        { q: "___ raining outside. (it's/its)", a: "It's", why: "contraction of 'it is'." },
        { q: "The dog wagged ___ tail. (it's/its)", a: "its", why: "possession, no apostrophe." },
        { q: "I bought apples___ oranges___ and bananas.", a: "commas after apples and oranges", why: "commas separate list items." },
        { q: "It was late___ however___ we stayed. (what punctuation before 'however'?)", a: "semicolon", why: "'however' joining two full sentences needs a semicolon before it, comma after." },
        { q: "I need two things___ eggs and milk. (what punctuation?)", a: "colon", why: "a colon introduces a list after a complete sentence." },
        { q: "the ___ (teachers'/teacher's) lounge is on the second floor. (multiple teachers)", a: "teachers'", why: "plural possessive for multiple owners adds just an apostrophe after the -s." }
      ]
    }
  },
];

export const getTopic = (id) => topics.find(t => t.id === id);
