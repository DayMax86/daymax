var LsDeleteAccount = React.createClass({
  render: function() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <title>Delete account</title>
        <style dangerouslySetInnerHTML={{__html: " body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding:1em; } " }} />
        <a href="mailto:daymax96@gmail.com?subject=Delete%20my%20LinguaSyne%20account&body=I%20no%20longer%20want%20to%20have%20a%20LinguaSyne%20account%2C%20and%20request%20that%20my%20account%20and%20user%20data%20be%20deleted.">
          Click here to request account deletion.
        </a>
        <p>
          All user data will be deleted: username, password, any uploaded images, all custom language data and progress.
          Data will be deleted within one month of the request being sent.
        </p>
      </div>
    );
  }
});

export default LsDeleteAccount;
