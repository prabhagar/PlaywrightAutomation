import{test, expect} from '@playwright/test'

test.skip('Test One', async({page}) => {
    test.fail();
});

test('not yet ready', async({page}) => {
    test.fail();
});

test.fixme('fix me', async({page}) => {
    // test.fixme();
});

test.slow('slow', async({page}) => {
    test.slow();
});

test('Test included in @smoke', async({page}) => {
    
});