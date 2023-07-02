export default function getSpecials(character) {
  const result = [];
  for (const special of character.special) {
    const {
      id, name, description, icon,
    } = special;
    result.push({
      id, name, icon, description: description || 'Описание недоступно',
    });
  }
  return result;
}
