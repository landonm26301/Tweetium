namespace Tweetium
{
    public class TwitterClient : ITwitterClient
    {
        /// <summary>
        /// The username used to sign in
        /// </summary>
        public string username { get; }

        /// <summary>
        /// The password used to sign in
        /// </summary>
        public string password { get; }

        


        public TwitterClient()
        {

        }

        /// <summary>
        /// Performs a specific action with the given input.
        /// </summary>
        /// <param name="usnername">This will be used first to sign in. This could be an email, phone number, or username (handle, @)</param>
        /// <param name="altUsername">This will be used if prompted with the suspicious activity screen. This could be an email, phone number, or username (handle, @)</param>
        /// <returns>Description of the return value.</returns>
        public async Task Login(string usnername, string altUsername, string password)
        {

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

        Task Login(string usnername, string altUsername, string password);
    }
}