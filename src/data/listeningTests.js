export const listeningTests = [
  {
    id: 1,
    title: "Listening Test 1 — Booking a Community Center Event Space",
    script: `Good morning, thank you for calling the Riverside Community Center, my name is Sarah, how can I help you today?

Hi Sarah, I'm interested in booking one of your event spaces for a birthday party next month.

Great, we'd be happy to help with that. Could I take your name first?

Yes, it's Amanda Clarke.

Thank you, Amanda. And what date were you thinking of?

I was hoping for Saturday the 14th of March, in the afternoon.

Let me check... yes, we do have availability that day. We have two rooms free — the Oak Room, which holds up to thirty people, and the smaller Willow Room, which holds about fifteen.

The Oak Room sounds better, we're expecting around twenty-five guests.

Perfect. The Oak Room is sixty dollars per hour, with a minimum booking of three hours. There's also a refundable deposit of fifty dollars, which you get back as long as the room is left in good condition.

That works for us. Could we book it from one o'clock to five o'clock?

Yes, that's four hours, so that would be two hundred and forty dollars plus the fifty dollar deposit, so two hundred and ninety dollars total.

Is catering included, or do we need to arrange that separately?

Catering is separate, but we do have a list of approved local caterers if you'd like recommendations. Also, please note that outside alcohol isn't permitted, but we do have a license for you to purchase drinks through our in-house bar if you're interested.

That's good to know, thank you. One more thing — is there parking available?

Yes, there's a free car park just behind the building with space for about forty cars, and it's directly accessible from the room as well.

That's great. I'd like to go ahead and book it then.

Wonderful, I'll just need your email address to send the confirmation and the deposit payment link.

It's amanda dot clarke, all one word, at mailbox dot com.

Perfect, you'll receive that within the next few minutes. Is there anything else I can help with?

No, that's everything, thank you so much for your help.

You're very welcome, Amanda, we look forward to seeing you on the 14th of March. Have a great day!`,
    questionGroups: [
      {
        instructions: "Questions 1-5: Complete the form below. Write NO MORE THAN THREE WORDS OR A NUMBER for each answer.",
        type: "form",
        questions: [
          { q: "Name: [1]___", answer: "Amanda Clarke" },
          { q: "Date requested: Saturday the [2]___", answer: "14th of March" },
          { q: "Room chosen: [3]___", answer: "Oak Room" },
          { q: "Number of expected guests: [4]___", answer: "25 (twenty-five)" },
          { q: "Room price: [5]___ per hour", answer: "$60" }
        ]
      },
      {
        instructions: "Questions 6-8: Choose the correct letter, A, B or C.",
        type: "mcq",
        questions: [
          {
            q: "6. What is the minimum booking length for the room?",
            options: ["A. One hour", "B. Two hours", "C. Three hours"],
            answer: "C"
          },
          {
            q: "7. What is the total cost mentioned, including the deposit?",
            options: ["A. $240", "B. $290", "C. $50"],
            answer: "B"
          },
          {
            q: "8. What does the staff member say about alcohol?",
            options: ["A. Outside alcohol is allowed with a fee", "B. Outside alcohol is not permitted, but drinks can be bought through their bar", "C. No alcohol is allowed at all"],
            answer: "B"
          }
        ]
      },
      {
        instructions: "Questions 9-10: Answer the questions below. Write NO MORE THAN THREE WORDS for each answer.",
        type: "short",
        questions: [
          { q: "9. What is provided free behind the building?", answer: "parking / a car park" },
          { q: "10. What does the staff member need to send the confirmation?", answer: "her email address" }
        ]
      }
    ]
  }
]
