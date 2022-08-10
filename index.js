const $textarea = document.getElementById('textarea');
const $button = document.getElementById('button');

$button.addEventListener('click', () => {
  const siteData = JSON.parse($textarea.value);

  const remappedElements = Object.fromEntries(
    Object.entries(siteData.components).filter(([elementId, elementData]) => {
      const hasOnlyNaturalKeys =
        elementData &&
        Object.values(elementData).length === 2 &&
        elementData.naturalWidth &&
        elementData.naturalHeight;
      return !hasOnlyNaturalKeys;
    })
  );

  const remappedData = {
    ...siteData,
    components: remappedElements,
  };

  navigator.clipboard.writeText(JSON.stringify(remappedData));
});
