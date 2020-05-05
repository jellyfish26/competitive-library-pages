export default {
    data () {
      return {
        func_reference: [
          {
            "function": "SpecifiedSquareFilledCount$(mh, mw, sh, sw)$",
            "explanation": "constructor_explanation",
            "amount": "$O(sh \\times sw)$",
            "constant_times": "very_light"
          },
          {
            "function": "add_paint_mass$(h, w)$",
            "explanation": "add_paint_mass_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
          {
            "function": "build$()$",
            "explanation": "build_explanation",
            "amount": "$O(N \\log N)$",
            "constant_times": "very_heavy"
          },
          {
            "function": "operator$[i]$",
            "explanation": "operator_reference_explanation",
            "amount": "$O(1)$",
            "constant_times": "very_light"
          },
        ]
      }
    }
  }