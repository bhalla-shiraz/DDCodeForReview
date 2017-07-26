import { SMILEY } from 'constants/emoticons'

export const getEmoticons = (emoticon) => {
   switch (emoticon) {
      case SMILEY:
         return 'smiley'
      default:
         return ''
   }
}
