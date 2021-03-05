export default {
  data () {
    return {
      reference_about: "reference_about",
      func_reference: [
        {
          "function": "Matrix$(H, W)$",
          "explanation": "constructor_normal_explanation",
          "amount": "$O(HW)$",
        },
        {
          "function": "Matrix$(N)$",
          "explanation": "constructor_square_explanation",
          "amount": "$O(N^2)$",
        },
        {
          "function": "update$(h, w, v)$",
          "explanation": "update_explanation",
          "amount": "$O(1)$",
        },
      ]
    }
  }
}