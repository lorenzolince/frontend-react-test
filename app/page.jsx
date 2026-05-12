"use client";

import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { getAllApi, saveApi } from './actions/restService';
import DataGrid from './components/DataGrid';

const Index = () => {

    const { t, i18n } = useTranslation();

    const dataSourcesSchema = Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().required(),
        cellPhone: Yup.string().required(),
        address: Yup.string().required()
    });

    const [apiServiceData, setServiceData] = useState([]);
    const [columnsHiden, setColumnsHiden] = useState(["principal"]);

    const {
        register,
        handleSubmit,
        reset,
        formState,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(dataSourcesSchema)
    });

    const onSubmit = async (data) => {
        console.log("data: ", data);

        await saveApi(data);

        reset();

        await reloadData();
    };

    const reloadData = async () => {
        const result = await getAllApi();
        setServiceData(result);
    };
    const changeLanguage = () => {
        const nextLang = i18n.language === "es" ? "en" : "es";
        i18n.changeLanguage(nextLang);
    };
    useEffect(() => {
        reloadData();
    }, []);

    return (
        <>
            <title>{t('index:title')}</title>

            <Container className="mt-4">

                <Form>
                  
                    {/* HEADER */}

                    <Row className="mb-4">

                        <Col className="d-flex justify-content-between align-items-center">

                            <h3 className="m-0">
                                {t('index:title')}
                            </h3>

                            <Button
                                variant="secondary"
                                size="sm"
                                onClick={changeLanguage}
                            >
                                {i18n.language === "es"
                                    ? "English"
                                    : "Español"}
                            </Button>

                        </Col>

                    </Row>

                    {/* FILA 1 */}

                    <Row className="mb-3">

                        <Col md={4}>
                            <Form.Group>
                                <Form.Label htmlFor="name">
                                    {t('index:ValidName')}
                                </Form.Label>

                                <Form.Control
                                    name="name"
                                    {...register("name")}
                                    type="text"
                                    placeholder={t('index:placeholderName')}
                                    isInvalid={!!errors.name}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {t('index:ValidName')}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                    </Row>

                    {/* FILA 2 */}

                    <Row className="mb-3">

                        <Col
                            md={4}
                        >
                            <Button
                                className="common-button-color"
                                type="submit"
                                disabled={formState.isSubmitting}
                                onClick={handleSubmit(onSubmit)}
                            >
                                {t('index:send')}
                            </Button>
                        </Col>

                    </Row>

                    <br />

                    <Row>
                        {
                            apiServiceData.length > 0 &&
                            <Col>
                                <DataGrid
                                    data={apiServiceData}
                                    schemaColumns="index"
                                    hiddenColumns={columnsHiden}
                                    pagination={true}
                                />
                            </Col>
                        }
                    </Row>

                </Form>

                <br />

            </Container>
        </>
    );
};

export default Index;