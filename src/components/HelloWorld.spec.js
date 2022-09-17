import HelloWorld from '@/components/HelloWorld.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, test } from 'vitest';

describe('HelloWorld', () => {
  test('renders the msg prop', () => {
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
