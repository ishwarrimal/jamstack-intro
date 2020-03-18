const listRepos = async userName => {
    let repos = await fetch(`https://api.github.com/users/${userName}/repos?type=owner&sort=updated`)
    console.log(repos)
    repos = await repos.json()
    const t = repos.body
    console.log(t)
    const p = await repos.body
    console.log(p)
    console.log(repos)

    const mk = repos.map(
        repo => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (* ${repo.stargazers_count})
        </li>
        `
    ).join('');

    const content = document.getElementById('content')
    content.innerHTML = `<ul>${mk}</ul>`
}

listRepos('getify')