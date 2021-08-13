export function domainType(domains: string[]): string[] {
  const results = {
    org: 'organization',
    com: 'commercial',
    net: 'network',
    info: 'information',
  };

  return domains.map(el => results[el.split('.').slice(-1)]);

}

// console.log(
//   domainType(['en.wiki.org', 'codefights.com', 'happy.net', 'code.info'])
// );
