import { Progress } from '@ark-ui/solid/progress'

export const Vertical = () => (
  <Progress.Root orientation="vertical">
    <Progress.Label>Label</Progress.Label>
    <Progress.ValueText />
    <Progress.Track>
      <Progress.Range />
    </Progress.Track>
  </Progress.Root>
)
