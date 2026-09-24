import { fireEvent, render, screen } from '@testing-library/react-native';
import MyButton from './MyButton';

const su = () => render(<MyButton />);

describe('MyButton tests', () => {
  test('should match snapshot', async () => {
    await su();
    expect(screen.toJSON()).toMatchSnapshot();
  });

  test('should increment count when button increment is pressed', async () => {
    await su();

    expect(screen.getByText('0')).toBeTruthy();

    await fireEvent.press(screen.getByText('+ Incrementar'));

    expect(screen.getByText('1')).toBeTruthy();
  });

  test('should decrement count when button decrement is pressed', async () => {
    await su();

    await fireEvent.press(screen.getByText('+ Incrementar'));
    await fireEvent.press(screen.getByText('- Decrementar'));

    expect(screen.getByText('0')).toBeTruthy();
  });

  test('should not decrement count when count is zero', async () => {
    await su();

    await fireEvent.press(screen.getByText('- Decrementar'));

    expect(screen.getByText('0')).toBeTruthy();
  });
});
