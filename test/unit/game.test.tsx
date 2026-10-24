import { h, render } from 'preact';
import { assert } from 'chai';
import Main from '../../src/components/main';
import EventHub from '../../src/modules/EventHub';

describe('game', () => {
  it('delivers an event once and removes its subscription', () => {
    const events = new EventHub<{ turn: number }>();
    const received: number[] = [];
    events.subscribeOnce('turn', value => received.push(value));
    events.send('turn', 1);
    events.send('turn', 2);
    assert.deepEqual(received, [1]);
  });

  it('renders and advances from welcome through simulated turns', async () => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    try {
      render(<Main />, root);
      assert.include(root.textContent!, 'No pain, no');
      root.querySelector<HTMLButtonElement>('.bottom button')!.click();
      // Preact 8 batches state updates; flush before checking each screen.
      await new Promise<void>(resolve => setTimeout(resolve, 0));
      assert.include(root.textContent!, 'Work!');
      for (let i = 0; i < 10; i++) {
        root.querySelector<HTMLButtonElement>('.simulated-turn button')!.click();
        await new Promise<void>(resolve => setTimeout(resolve, 0));
      }
      assert.include(root.textContent!, 'Good job!');
    } finally {
      render(<div />, root);
      root.remove();
    }
  });
});
