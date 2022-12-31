import {
  Sandpack,
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
} from '@codesandbox/sandpack-react';
import { dracula } from '@codesandbox/sandpack-themes';

export default function SandBox() {
  return (
    <SandpackProvider theme={dracula} template="react">
      <SandpackLayout>
        <SandpackCodeEditor
          showTabs
          showLineNumbers={false}
          showInlineErrors
          wrapContent
        />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
}
