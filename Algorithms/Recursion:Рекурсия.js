function findKey(boxes) {
  if (!boxes.length) {
    return null;
  }

  const box = boxes.pop();
  if (Array.isArray(box)) {
    boxes.push(...box);
  } else if (box === 'key') {
    return box;
  }

  return findKey(boxes);
}

