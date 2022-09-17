import HelloWorld from '@/components/HelloWorld.vue';
import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';

describe('HelloWorld', () => {
  it('renders the msg prop', () => {
    // Arrange
    const msg = 'foo';

    // Act
    const wrapper = mount(HelloWorld, {
      props: { msg },
    });

    // Assert
    expect(wrapper.text()).toContain(msg);
  });
});
