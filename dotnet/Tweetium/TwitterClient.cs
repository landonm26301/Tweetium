using OpenQA.Selenium;
using OpenQA.Selenium.DevTools.V111.Network;
using OpenQA.Selenium.Firefox;

namespace Tweetium
{
    public class TwitterClient : ITwitterClient
    {
        /// <summary>
        /// The username used to sign in
        /// </summary>
        public string username { get; private set; }

        /// <summary>
        /// The password used to sign in
        /// </summary>
        public string password { get; private set; }

        /// <summary>
        /// The password used to sign in
        /// </summary>
        private string _cookies;


        public TwitterClient()
        {

        }

        /// <summary>
        /// Logins you into the client
        /// </summary>
        /// <param name="usnername1">This will be used first to sign in. This could be an email, phone number, or username (handle, @)</param>
        /// <param name="username2">This will be used if prompted with the suspicious activity screen. THIS HAS TO BE DIFFERENT THAN THE FIRST!! This could be an email, phone number, or username (handle, @)</param>
        /// <param name="accountPassword">The password of the account you want to use.</param>
        public TwitterClient(string usnername1, string username2, string accountPassword)
        {
            Login(usnername1, username2, accountPassword).Wait();

        }


        /// <summary>
        /// Logins you into the client
        /// </summary>
        /// <param name="usnername1">This will be used first to sign in. This could be an email, phone number, or username (handle, @)</param>
        /// <param name="username2">This will be used if prompted with the suspicious activity screen. THIS HAS TO BE DIFFERENT THAN THE FIRST!! This could be an email, phone number, or username (handle, @)</param>
        /// <param name="accountPassword">The password of the account you want to use.</param>
        public async Task Login(string usnername1, string username2, string accountPassword)
        {
            username = usnername1;
            password = accountPassword;

            var tries = 0;

            FirefoxDriver driver = null;

            while (tries < 5)
            {
                try
                {
                    driver = new FirefoxDriver();
                    tries = 5;
                }
                catch
                {
                    tries++;
                }
                finally
                {
                    if (driver != null)
                    {
                        tries = 5;
                    }
                }
            }

            if (driver == null)
                new NullReferenceException();
            try
            {

                driver.Navigate().GoToUrl("https://twitter.com/i/flow/login");

                //var loginBtn = driver.FindElement(By.XPath("//a[@class='css-4rbku5 css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-rs99b7 r-1loqt21 r-2yi16 r-1qi8awa r-1ny4l3l r-ymttw5 r-o7ynqc r-6416eg r-lrvibr']"));
                //loginBtn.Click();

                await Task.Delay(3000);

                var usernameFill = driver.FindElement(By.XPath("//input[@name='text']"));
                usernameFill.Click();
                usernameFill.SendKeys(usnername1);

                var nextBtn = driver.FindElement(By.XPath("//span[contains(text(),'Next')]"));
                nextBtn.Click();
                await Task.Delay(1000);

                //if (driver.FindElements(By.XPath(" ")).Count > 0)
                //{

                //}


                var passwordFill = driver.FindElement(By.XPath("//input[@name='password']"));
                passwordFill.Click();
                passwordFill.SendKeys(password);

                var REALloginButon = driver.FindElement(By.XPath("//span[@class='css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-1inkyih r-rjixqe r-bcqeeo r-qvutc0']//span[@class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'][normalize-space()='Log in']"));
                REALloginButon.Click();
            }
            catch { }
            finally
            {
                driver.Quit();
            }
            await Task.Delay(100);

        }
    }

    interface ITwitterClient
    {
        /// <summary>
        /// The username used to sign in
        /// </summary>
        public string username { get; }

        /// <summary>
        /// The password used to sign in
        /// </summary>
        public string password { get; }

        Task Login(string usnername1, string username2, string password);
    }
}
