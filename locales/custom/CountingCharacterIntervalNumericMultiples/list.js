export default {
    data () {
      return {
        reference_about: "reference_about",
        dependent_libraries: [
          {
            "name": "cumulative_sum",
            "link": "algorithm-CumulativeSum"
          },
        ],
        func_reference: [
          {
            "function": "CountingCharacterIntervalNumericMultiples$(S, r, m, s)$",
            "explanation": "constructor_explanation",
            "amount": "$O(N)$",
            "constant_times": "very_light"
          },
          {
            "function": "build$()$",
            "explanation": "build_explanation",
            "amount": "$O(N)$",
            "constant_times": "light"
          },
          {
            "function": "is_visible$()$",
            "explanation": "is_visible_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }