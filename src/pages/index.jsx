import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Jumbotron } from "@/components/Jumbotron";
import { Container, Row, Col, Button} from "react-bootstrap";
import About from "./about";
import Link from "next/link";
import { CounterContainer } from "@/components/CounterContainer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container>
      <CounterContainer/>
    </Container>
  );
}
