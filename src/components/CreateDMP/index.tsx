import { LockKeyhole } from 'lucide-react';

export default function CreateDMP() {
  return (
    <>
      <a
        class="button button--primary"
        href="https://cockpit.research.tue.nl"
        target="_blank"
      >
        Create a Data Management Plan on Research Cockpit
        <LockKeyhole size={10} strokeWidth={2.5} style={{ marginLeft: '0.25rem' }} />
      </a>
    </>
  );
}
