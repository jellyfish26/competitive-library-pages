export default {
  data () {
    return {
      reference_about: "reference_about",
      dependent_libraries: [
        {
          "name": "matrix",
          "link": "geometry-Matrix"
        },
      ],
      func_reference: [
        {
          "function": "Affine$()$",
          "explanation": "constructor_normal_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "gen_scaling$(x, y)$",
          "explanation": "gen_scaling_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "gen_translation$(x, y)$",
          "explanation": "gen_translation_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "gen_rotate$(\\theta)$",
          "explanation": "gen_rotate_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "gen_xskew$(\\theta)$",
          "explanation": "gen_xskew_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "gen_yskew$(\\theta)$",
          "explanation": "gen_yskew_explanation",
          "amount": "$O(1)$",
        },
        {
          "function": "calc$(x, y)$",
          "explanation": "calc_explanation",
          "amount": "$O(1)$",
        }
      ]
    }
  }
}