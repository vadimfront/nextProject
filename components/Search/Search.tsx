import styles from './Search.module.css'
import cn from 'classnames';
import GlassIcon from './glass.svg';
import { SearchProps } from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState, KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
    const [search, setSearch] = useState<string>('');
    const router = useRouter();

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key == 'Enter') {
            goToSearch();
        }
        return e.key;
    }

    return (
        <form className={cn(className, styles.search)} {...props} role="search">
            <Input 
                placeholder='Поиск...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.input}
                onKeyDown={handleKeyDown}
             />
            <Button
                appearance='primary'
                className={styles.button}
                onClick={goToSearch}
                aria-label="Искать по сайту"
            >
                <GlassIcon/>
            </Button>
        </form>
    );
};