import Router from 'koa-router';
import checkPalindrome from './services/checkPalindrome';

const router = new Router();

/*
    HOME
 */

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Palindrome Checker'
    });
});


router.get('/public/styles/style.css', (ctx, next) => {
    ctx.render('/public/styles/style.css');
});

/*
    API
 */
router.get('/check/:phrase', (ctx, next) => {

    var { phrase } = ctx.params;

    ctx.body = {
        phrase: phrase,
        isPalindrome: checkPalindrome(phrase)
    };
});

export default router;
