export const readingTests = [
  {
    id: 1,
    title: "Reading Test 1 — The History of Urban Green Spaces",
    passage: `Urban green spaces — parks, gardens, and tree-lined streets within cities — have a longer and more complex history than many people realize. In the early industrial era, cities grew rapidly and haphazardly, with little consideration for open space. Factory workers often lived in cramped housing with no access to nature at all. It was only in the mid-19th century that reformers began to argue that access to green space was not a luxury but a public health necessity.

One of the earliest large-scale examples was Central Park in New York City, designed by Frederick Law Olmsted and Calvin Vaux and opened in stages beginning in 1858. Olmsted believed that a well-designed park could provide psychological relief from the stress of city life, and he deliberately created winding paths and varied landscapes to give visitors the sense of being far from the city, even though they remained within it. This idea — that nature could be "prescribed" for mental wellbeing — was radical for its time, but it has since been supported by a large body of modern research.

Studies conducted in the late 20th and early 21st centuries have consistently found that access to green space is associated with lower stress levels, reduced rates of certain illnesses, and even improved recovery times for hospital patients. A frequently cited 1984 study by Roger Ulrich found that hospital patients recovering from surgery who had a view of trees from their window recovered faster and required less pain medication than those who viewed a brick wall.

However, the benefits of urban green space are not distributed equally. Research has repeatedly shown that wealthier neighborhoods tend to have significantly more access to parks and tree cover than lower-income areas, a disparity now often referred to as "green inequality." This has become a growing focus for urban planners, who argue that equitable access to nature should be treated as a matter of environmental justice rather than simply an aesthetic concern.

In recent years, some cities have begun experimenting with more radical approaches, including converting unused railway lines into elevated parks (such as the High Line in New York) and mandating minimum tree canopy coverage in new housing developments. Critics argue that such projects can sometimes accelerate gentrification, pricing out the very communities they were intended to help — a phenomenon researchers have termed "green gentrification." This tension between improving urban environments and protecting long-term residents remains an unresolved challenge for city planners today.`,
    questionGroups: [
      {
        instructions: "Questions 1-4: Choose the correct letter, A, B, C or D.",
        type: "mcq",
        questions: [
          {
            q: "1. According to the passage, why did reformers begin to push for green spaces in the mid-19th century?",
            options: ["A. Cities were becoming too crowded with traffic", "B. They believed it was a public health necessity", "C. Factory owners requested more open land", "D. Property values were falling in industrial areas"],
            answer: "B"
          },
          {
            q: "2. What made Olmsted's design of Central Park unusual for its time?",
            options: ["A. It used only native plant species", "B. It was funded entirely by private donors", "C. It aimed to give visitors psychological relief through design", "D. It was the largest park ever built"],
            answer: "C"
          },
          {
            q: "3. What did the 1984 Ulrich study compare?",
            options: ["A. Patients in different hospitals", "B. Patients with a view of trees versus a view of a brick wall", "C. Patients who exercised versus those who didn't", "D. Recovery rates before and after 1984"],
            answer: "B"
          },
          {
            q: "4. According to the passage, what is 'green gentrification'?",
            options: ["A. Parks that are poorly maintained over time", "B. The process of converting parks into housing", "C. Green projects that end up displacing the communities they were meant to help", "D. A type of plant used in urban landscaping"],
            answer: "C"
          }
        ]
      },
      {
        instructions: "Questions 5-9: Do the following statements agree with the information in the passage? Write TRUE, FALSE, or NOT GIVEN.",
        type: "tfng",
        questions: [
          { q: "5. Central Park was the first park ever built in a city.", answer: "NOT GIVEN" },
          { q: "6. Olmsted's design included winding paths and varied landscapes.", answer: "TRUE" },
          { q: "7. Wealthier neighborhoods generally have more green space than poorer ones.", answer: "TRUE" },
          { q: "8. All cities have now adopted minimum tree canopy requirements.", answer: "FALSE" },
          { q: "9. The High Line was built entirely from scratch, not converted from an existing structure.", answer: "FALSE" }
        ]
      },
      {
        instructions: "Questions 10-13: Complete the summary below using NO MORE THAN TWO WORDS from the passage for each answer.",
        type: "summary",
        summaryText: "Research shows that access to green space is linked to lower [10]___ levels and can even help patients recover faster in [11]___. However, this benefit is not shared equally — a problem researchers call [12]___. Some newer projects, such as converting old railway lines into parks, have been criticized for accelerating a related problem known as [13]___.",
        questions: [
          { q: "10.", answer: "stress" },
          { q: "11.", answer: "hospital" },
          { q: "12.", answer: "green inequality" },
          { q: "13.", answer: "green gentrification" }
        ]
      }
    ]
  }
]
