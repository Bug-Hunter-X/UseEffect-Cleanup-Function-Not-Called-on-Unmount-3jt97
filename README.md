# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a common issue in React where the cleanup function within `useEffect` is not always called when a component unmounts.  This can lead to memory leaks or unexpected behavior if the cleanup function performs actions like clearing intervals, timeouts, or subscriptions.

The bug is reproduced when the parent component renders repeatedly before the child component has time to unmount. This can happen in various situations such as rapid state changes in a parent or routing changes.