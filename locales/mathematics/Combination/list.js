export default {
  data () {
    return {
      dependent_libraries: [
        {
          "name": "modint",
          "link": "mathematics-ModInt"
        },
      ],
      func_reference: [
        {
          "function": "Combination$(N)$",
          "explanation": "constructor_explanation",
          "amount": "$O(N)$",
          "constant_times": "normal"
        },
        {
          "function": "P$(n, k)$",
          "explanation": "P_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
        {
          "function": "C$(n, k)$",
          "explanation": "C_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
        {
          "function": "H$(n, k)$",
          "explanation": "H_explanation",
          "amount": "$O(1)$",
          "constant_times": "very_light"
        },
      ]
    }
  }
}