import type { Field } from 'payload'

export const VisualPicker = ({ name, label }: { name: string; label: string }): Field => ({
  name,
  type: 'json',
  label,
  admin: {
    components: {
      Field: '/fields/VisualPickerField#VisualPickerField',
    },
  },
})
