import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';


function Home({menu}: HomeProps) : JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
      <div>
          <Htag tag="h1">Текст</Htag>
          <Button appearance='primary' className='btn' arrow='right'>Кнопка</Button>
          <Button appearance='ghost'>Кнопка</Button>
          <P size='l'>Текст</P>
          <Tag size='m' color='red'>Текст</Tag>
          <Rating rating={rating} isEditable setRating={setRating} />
          <Input placeholder='test'/>
         <Textarea placeholder='Textarea'/>
      </div>
  )
}

export default withLayout(Home);

export const  getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  })
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown>  {
  menu: MenuItem[];
  firstCategory: number;
}