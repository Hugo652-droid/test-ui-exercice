import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = //TODO: Créer un test de component "HelloWorld" avec un message particulier
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
