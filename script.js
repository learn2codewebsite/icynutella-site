document.addEventListener('DOMContentLoaded', () => {
    const guildId = '1208755589144911872'; // Replace with your guild (server) ID
    const botToken = 'MTIzNzEyODAzNTYwNjQ2MjU1NA.Gz1Rzw.7pOB470-Sf9BXffM48mSxyClx-YOpFnKXh2PUs'; // Replace with your bot token

    fetch(`https://discord.com/api/v9/guilds/${guildId}/widget.json`, {
        headers: {
            'Authorization': `Bot ${botToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        const onlineMembers = data.presence_count;
        const totalMembers = data.members.length;

        document.getElementById('online-members').textContent = onlineMembers;
        document.getElementById('total-members').textContent = totalMembers;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        document.getElementById('online-members').textContent = 'Error';
        document.getElementById('total-members').textContent = 'Error';
    });
});
