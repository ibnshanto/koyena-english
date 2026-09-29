/**
 * Explanation Helper
 * Transforms raw exam explanations into simple, clear, student-friendly 3-part breakdowns:
 * 1. Why This Answer Fits (sentence clues & reasoning in plain language)
 * 2. Simple Golden Rule (memorable principle without academic jargon)
 * 3. Watch Out / Common Trap (frequent mistake learners make)
 */

export function getDetailedExplanation(q, answer, rawExplanation, topicId) {
  const normAns = (answer || '').trim();
  const qText = (q || '').trim();
  const raw = (rawExplanation || '').trim();

  // If already structured into Why / Rule / Watch out:
  if (raw.includes('Why:') && raw.includes('Rule:')) {
    const whyMatch = raw.match(/Why:\s*([^]+?)(?=Rule:|$)/i);
    const ruleMatch = raw.match(/Rule:\s*([^]+?)(?=Watch out:|$)/i);
    const trapMatch = raw.match(/Watch out:\s*([^]+)$/i);
    return {
      why: whyMatch ? whyMatch[1].trim() : raw,
      rule: ruleMatch ? ruleMatch[1].trim() : 'Master the underlying grammatical pattern for consistent accuracy.',
      trap: trapMatch ? trapMatch[1].trim() : 'Read the complete sentence carefully before choosing your answer.'
    };
  }

  // Topic-specific rules & breakdowns
  let why = '';
  let rule = '';
  let trap = '';

  const cleanTopic = (topicId || '').toLowerCase();

  if (cleanTopic === 'articles') {
    if (normAns.toLowerCase() === 'the') {
      why = raw || `We use "the" here because the sentence points to a specific, definite item that both the speaker and listener know about.`;
      rule = `Use "the" when talking about something specific, previously mentioned, unique, or clearly defined in context.`;
      trap = `Don't use "the" for general statements about plural or uncountable things (e.g. "Dogs are loyal", not "The dogs are loyal").`;
    } else if (normAns.toLowerCase() === 'a') {
      why = raw || `We use "a" because this refers to one non-specific item starting with a consonant sound.`;
      rule = `Use "a" before singular countable nouns that start with a consonant sound (e.g. a book, a university).`;
      trap = `Watch the sound, not the spelling! Words like "university" start with a consonant 'y' sound, so they take "a".`;
    } else if (normAns.toLowerCase() === 'an') {
      why = raw || `We use "an" because the word directly following starts with a vowel sound (A, E, I, O, U).`;
      rule = `Use "an" before singular countable nouns that begin with a vowel sound (e.g. an apple, an hour).`;
      trap = `Words with a silent 'h' (like "an hour", "an honest person") take "an" because of the vowel sound.`;
    } else {
      why = raw || `No article is needed here because the noun is used in a broad, general sense or is uncountable.`;
      rule = `Zero article (no article) is used with general plural nouns, uncountable nouns, proper names, and many abstract ideas.`;
      trap = `Avoid putting "the" in front of every noun when speaking generally (e.g. "I love music", not "I love the music").`;
    }
  } else if (cleanTopic === 'subject-verb-agreement') {
    why = raw || `The correct verb form must agree in number (singular or plural) with the true subject of the clause.`;
    rule = `Singular subjects take singular verbs (ends in -s in present simple: He walks). Plural subjects take plural verbs (They walk).`;
    trap = `Don't get tricked by words between the subject and the verb (e.g. "The box [of apples] IS heavy" — the subject is box, not apples).`;
  } else if (cleanTopic === 'present-tenses') {
    if (raw.toLowerCase().includes('continuous') || normAns.endsWith('ing')) {
      why = raw || `The action is happening right now around the moment of speaking or is a temporary situation.`;
      rule = `Present Continuous (am/is/are + verb-ing) describes actions in progress now, temporary events, or arranged future plans.`;
      trap = `Stative verbs (like know, want, like, understand) are rarely used in continuous tenses — use present simple instead.`;
    } else if (raw.toLowerCase().includes('perfect')) {
      why = raw || `The action connects the past to the present moment, or describes an experience up to now.`;
      rule = `Present Perfect (has/have + past participle) links past actions to present relevance or unspecified time.`;
      trap = `Never use Present Perfect with a finished past time word like "yesterday" or "in 2010" — use Past Simple instead.`;
    } else {
      why = raw || `This expresses a regular habit, general truth, or permanent routine.`;
      rule = `Present Simple (verb / verb-s) is used for facts, repeated habits, schedules, and unchanging truths.`;
      trap = `Remember the 3rd person singular '-s' for he/she/it (e.g. "she writes", "he plays").`;
    }
  } else if (cleanTopic === 'past-tenses') {
    if (raw.toLowerCase().includes('perfect') || raw.toLowerCase().includes('had')) {
      why = raw || `This action was completed before another past event took place.`;
      rule = `Past Perfect (had + past participle) establishes which of two past actions happened first ("the past of the past").`;
      trap = `Only use Past Perfect when you need to clarify the sequence of two past events; otherwise, Past Simple is cleaner.`;
    } else if (raw.toLowerCase().includes('continuous') || raw.toLowerCase().includes('was') || raw.toLowerCase().includes('were')) {
      why = raw || `This describes an activity that was already in progress when something else happened in the past.`;
      rule = `Past Continuous (was/were + verb-ing) sets the background scene or an interrupted action in the past.`;
      trap = `The interrupting shorter action takes Past Simple, while the ongoing background action takes Past Continuous.`;
    } else {
      why = raw || `The action started and finished completely at a specific time in the past.`;
      rule = `Past Simple (regular -ed or irregular 2nd form) tells completed past events and stories in sequence.`;
      trap = `In questions and negatives with "did/didn't", return the main verb to base form (e.g. "Did you go?", not "Did you went?").`;
    }
  } else if (cleanTopic === 'future-forms') {
    if (normAns.includes('going to')) {
      why = raw || `This expresses a prior intention, conscious plan, or a prediction based on present visible evidence.`;
      rule = `Use "be going to" for planned decisions made before speaking and for predictions with clear physical signs.`;
      trap = `Use "will" for spontaneous decisions made at the instant of speaking (e.g. "The phone is ringing. I'll get it!").`;
    } else {
      why = raw || `This expresses a spontaneous decision, promise, future fact, or personal opinion about what will happen.`;
      rule = `Use "will + base verb" for instant decisions, offers, promises, and opinions with "I think / I hope".`;
      trap = `Do not use "will" in time clauses starting with "when", "as soon as", or "if" (use present simple instead).`;
    }
  } else if (cleanTopic === 'conditionals') {
    if (raw.toLowerCase().includes('third') || raw.toLowerCase().includes('would have')) {
      why = raw || `This imagines an impossible past situation and its unchangeable result (regret or hypothetical past).`;
      rule = `Third Conditional Formula: If + past perfect (had + V3), ... would have + past participle (V3).`;
      trap = `Never put "would have" in the "if" clause (say "If I had known", not "If I would have known").`;
    } else if (raw.toLowerCase().includes('second') || raw.toLowerCase().includes('would')) {
      why = raw || `This discusses an imaginary, unreal, or unlikely situation in the present or future.`;
      rule = `Second Conditional Formula: If + past simple, ... would + base verb.`;
      trap = `In formal English, use "were" for all subjects in the if-clause (e.g. "If I were you", "If he were here").`;
    } else {
      why = raw || `This describes a real, likely possibility in the future and its logical consequence.`;
      rule = `First Conditional Formula: If + present simple, ... will + base verb.`;
      trap = `Do not put "will" inside the if-clause (say "If it rains, we will stay", not "If it will rain").`;
    }
  } else if (cleanTopic === 'passive-voice') {
    why = raw || `The receiver of the action is the focus of the sentence, or the person doing the action is unknown or unimportant.`;
    rule = `Passive Formula: Appropriate form of "to be" + Past Participle (3rd form of the verb).`;
    trap = `Intransitive verbs (verbs that take no direct object, like "arrive", "sleep", "happen") cannot be made passive.`;
  } else if (cleanTopic === 'modal-verbs') {
    why = raw || `The modal verb precisely shades the meaning: showing ability, obligation, permission, or deduction.`;
    rule = `Modal verbs (can, could, must, should, might, may) are followed directly by the base verb without "to" (except ought to).`;
    trap = `Modal verbs never take an "-s" in third person (he can, she must — never he cans or she musts).`;
  } else if (cleanTopic === 'verb-patterns') {
    why = raw || `In English, the first verb strictly governs whether the second verb must be a gerund (-ing) or an infinitive (to + verb).`;
    rule = `Certain verbs (enjoy, avoid, suggest) require a Gerund (-ing). Others (decide, hope, agree) require an Infinitive (to + verb).`;
    trap = `Prepositions are ALWAYS followed by gerunds (-ing), never by infinitives (e.g. "interested in learning").`;
  } else if (cleanTopic === 'prepositions') {
    why = raw || `This preposition correctly indicates the exact relationship of time, place, direction, or fixed idiom.`;
    rule = `Time: "at" for precise times, "on" for days/dates, "in" for months/years/centuries. Place: "at" for points, "on" for surfaces, "in" for enclosed areas.`;
    trap = `Do not translate prepositions word-for-word from your native language; learn them in fixed natural pairings.`;
  } else if (cleanTopic === 'sentence-structure') {
    why = raw || `This correctly balances the clauses to avoid sentence fragments, comma splices, and run-on structures.`;
    rule = `Simple = 1 independent clause. Compound = 2 independent clauses + FANBOYS/semicolon. Complex = 1 independent + 1+ dependent clauses.`;
    trap = `Never join two complete independent thoughts with only a comma. Use a comma + coordinating conjunction, or a semicolon.`;
  } else if (cleanTopic === 'nouns' || cleanTopic === 'pronouns') {
    why = raw || `This noun/pronoun correctly fits the grammatical role (subject, object, possessive, or countable/uncountable).`;
    rule = `Pronouns replace nouns and must match their antecedent in gender, number, and case (subject: he/they, object: him/them).`;
    trap = `Uncountable nouns (advice, information, furniture, luggage) never take plural -s and never take "a/an".`;
  } else if (cleanTopic === 'adjectives' || cleanTopic === 'adverbs') {
    why = raw || `This word correctly modifies either a noun/pronoun (adjective) or a verb/adjective/other adverb (adverb).`;
    rule = `Adjectives describe nouns (a quick decision). Adverbs describe how, when, or where an action happens (he decided quickly).`;
    trap = `Linking verbs like seem, look, smell, taste, feel take adjectives, not adverbs (e.g. "The soup smells good", not "well").`;
  } else {
    // Default fallback
    why = raw || `This answer fits the grammatical syntax and natural meaning of the sentence.`;
    rule = `Apply consistent agreement, correct verb forms, and natural English word combinations.`;
    trap = `Read the whole sentence from start to finish to ensure both meaning and structure sound natural.`;
  }

  // If raw explanation provides extra valuable details, integrate them seamlessly
  if (raw && !why.includes(raw) && raw.length > 5) {
    why = `${raw} Notice how "${normAns}" satisfies this sentence requirement.`;
  }

  return { why, rule, trap };
}
