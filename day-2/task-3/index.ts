function createBook(source: SourceData): Book {
  let preview = `Название: ${source.title}, Автор: ${source.author},
 Год: ${source.year}`;

  const { year, ...otherParams } = source;

  const url = `www.someurl.com/preview?${new URLSearchParams({
    ...otherParams,
    year: `${year}`,
  })}`;

  return {
    ...source,
    preview,
    url,
  };
}

const source: SourceData = {
  title: "Harry Potter",
  year: 1997,
  author: "J.K. Rowling",
};

interface SourceData {
  title: string;
  year: number;
  author: string;
}

interface Book {
  title: string;
  author: string;
  year: number;
  preview: string;
  url: string;
}

console.log(createBook(source));
