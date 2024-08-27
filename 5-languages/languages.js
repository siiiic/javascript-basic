const language = `jp`; 
switch(language.toLowerCase()) {
    case 'en': 
        console.log('Hello');
    break;
    case 'de':
        console.log('Gutten tag');
    break;
    case 'ru':
        console.log('Привет');
    break;
    case 'jp':
        console.log('こんにちは');
    break;
    case 'sw':
        console.log('Hej');
    break;
    default:
        console.log('Hello');
}