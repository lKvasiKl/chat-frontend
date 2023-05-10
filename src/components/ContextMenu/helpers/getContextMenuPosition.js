const getContextMenuPosition = (event, anchorPosition) => {
  const { clientX, clientY } = event;
  const verticalPosition = { top: clientY, center: clientY, bottom: clientY };
  const horizontalPosition = { left: clientX, center: clientX, right: clientX };

  return {
    top: verticalPosition[anchorPosition.vertical] - 85,
    left: horizontalPosition[anchorPosition.horizontal],
  };
};

export { getContextMenuPosition };
