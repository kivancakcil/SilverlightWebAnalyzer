import { render, screen } from '@testing-library/react';
import TargetList from '../components/AnalysisPage/TargetList';
import { BrowserRouter } from 'react-router-dom';

test('renders target list correctly', () => {
  const targets = ['http://example.com', 'http://www.google.com'];
  const loadingStates = { "http://example.com": false, "http://www.google.com": true };

  render(
    <BrowserRouter>
      <TargetList targets={targets} loadingStates={loadingStates} />
    </BrowserRouter>
  );

  const targetButtons = screen.getAllByRole("button");
  expect(targetButtons).toHaveLength(2);
});
