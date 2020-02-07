import { Stream } from 'filexon';

const stream  = new Stream();
export function genFile(text: string) {
    stream.write(text);
    stream.out('download.txt');
}
