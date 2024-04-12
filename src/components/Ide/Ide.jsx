import { useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, highlightSpecialChars, drawSelection, highlightActiveLine, lineNumbers } from '@codemirror/view';
// import { defaultHighlightStyle } from '@codemirror/language';
import { defaultKeymap, historyKeymap, history } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { searchKeymap, highlightSelectionMatches } from '@codemirror/search';
import { autocompletion, completionKeymap } from '@codemirror/autocomplete';
import { lintKeymap } from '@codemirror/lint';
import { oneDark } from '@codemirror/theme-one-dark'; // Import the dark theme


const Ide = ({ consoleOutput, runCode }) => {
	const editorRef = useRef(); // This will hold the EditorView instance


	useEffect(() => {
		if (!editorRef.current) return;
		editorRef.current = new EditorView({
			state: EditorState.create({
				doc: '', // Make sure this string does not include a newline character
				extensions: [
					lineNumbers(),
					highlightSpecialChars(),
					history(),
					drawSelection(),
					EditorState.allowMultipleSelections.of(true),
					highlightActiveLine(),
					// defaultHighlightStyle.fallback,
					keymap.of([...defaultKeymap, ...searchKeymap, ...historyKeymap, ...lintKeymap, completionKeymap]),
					javascript(),
					autocompletion(),
					highlightSelectionMatches(),
					oneDark, // Add the dark theme to your extensions
				],
			}),
			parent: editorRef.current,
		});
	}, []);

	return (
		<>
			<div ref={editorRef} style={{
				height: '300px',
				textAlign: 'left',
				backgroundColor: '#282c34',
				borderRadius: "8px",
				overflow: 'auto',
				padding: '8px',
			}}>
			</div>
			<button onClick={runCode} style={{ margin: '8px' }}>Run Code</button>
			<div style={{
				backgroundColor: '#000000',
				textAlign: 'left',
				padding: '10px',
				height: '100px',
				borderRadius: "8px",
				overflow: 'auto',
			}}>
				{consoleOutput}
			</div> {/* Console output */}
		</>
	)
}

export default Ide