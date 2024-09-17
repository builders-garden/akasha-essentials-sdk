import { useState } from "react";

export type EditorUIState = "editor" | "tags" | "blocks";

export const useAkashaEditor = () => {
  const [uiState, setUiState] = useState<EditorUIState>("editor");
  const [focusedBlock, setFocusedBlock] = useState(null);
  const [tagValue, setTagValue] = useState("");
  const [editorTags, setEditorTags] = useState([]);
  const [newTags, setNewTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isNsfw, setIsNsfw] = useState(false);
  const [nsfwBlocks, setNsfwBlocks] = useState(new Map<number, boolean>());

  return {
    uiState,
    setUiState,
    focusedBlock,
    setFocusedBlock,
    tagValue,
    setTagValue,
    editorTags,
    setEditorTags,
    newTags,
    setNewTags,
    errorMessage,
    setErrorMessage,
    isNsfw,
    setIsNsfw,
    nsfwBlocks,
    setNsfwBlocks,
  };
};
