export default {
  data() {
    return {
      reference_about: "reference_about",
      func_reference: [
        {
          "function": "CumulativeSum$(size)$",
          "explanation": "constructor_explanation",
          "amount": "$O(N)$",
          "constant_times": "very_light"
        },
        {
          "function": "update$(i, v)$",
          "explanation": "update_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
        {
          "function": "build$()$",
          "explanation": "build_explanation",
          "amount": "$O(N)$",
          "constant_times": "very_light"
        },
        {
          "function": "sum$(i)$",
          "explanation": "sum_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
        {
          "function": "sum_all$()$",
          "explanation": "sum_all_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
        {
          "function": "query$(l, r)$",
          "explanation": "query_section_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
      ]
    }
  }
}