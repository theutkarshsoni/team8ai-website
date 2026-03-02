export type AirtableJobRecord = {
    id: string;
    title: string;
    company: string;
    stage: string;
    link?: string;
};

export async function fetchAirtableJobs(): Promise<AirtableJobRecord[]> {
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableId = process.env.AIRTABLE_TABLE_ID;
    const token = process.env.AIRTABLE_API_TOKEN;

    if (!baseId || !tableId || !token) {
        return [
            {
                id: 'local-demo-1',
                title: 'Senior Full Stack Engineer',
                company: 'Demo Company',
                stage: 'Verifier Pending',
                link: '#',
            },
        ];
    }

    const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;
    const response = await fetch(url, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        next: { revalidate: 300 },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Airtable jobs');
    }

    const data = await response.json();

    return (data.records ?? []).map((record: any) => ({
        id: record.id,
        title: record.fields?.Title ?? 'Untitled Role',
        company: record.fields?.Company ?? 'Unknown Company',
        stage: record.fields?.Stage ?? 'Captured',
        link: record.fields?.Link,
    }));
}