
/**
 * php_standard_tag is a card
 */
const php_standard_tag = {
  front: ` ~php~ standard tag `,
  back: `
  ~~~
  <?php ?>
  ~~~
  `
}

/**
 * php_echo_tag is a card
 */

const php_echo_tag = {
  front: `php echo tag`,
  back:`
  ~~~
  <?= $var ?>
  ~~~
  `
}

/**
 * php_basic is a decks which holding some card 
 */
const php_basic = {
  title: "php essential",
  tags: "string function",
  cards: [
    php_standard_tag,
    php_echo_tag,
  ]
}

export default php_basic
