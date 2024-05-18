const formatCpf = (text) => {
  const removeText = text.replace(/[^\d]/g, "");

  const limitedText = removeText.slice(0, 11);

  const formattedText = limitedText.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    "$1.$2.$3-$4"
  );

  return formattedText;
};

export { formatCpf };
